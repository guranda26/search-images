import axios from "axios";
import { useCallback, useEffect, useRef, useState } from "react";
import ImageInterface from "../interface/image.interface";
import SearchHistory from "../components/UpdateSearch";
import ApiResponse from "../interface/api.response";
import ScrollBottom from "../components/ScrollBottom";

const MainPage: React.FC<{}> = () => {
  const [images, setImages] = useState<ImageInterface[]>([]);
  const [countImage, setCountImage] = useState(0);
  const [page, setPage] = useState(1);
  const [errorMsg, setError] = useState("");
  const searchImg = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);

  const cached = useRef<{
    [key: string]: { images: ImageInterface[]; countImage: number };
  }>({});

  const API = "https://api.unsplash.com/search/photos";
  const PHOTOS_API = "https://api.unsplash.com/photos";
  const PER_PAGE = 20;
  const ORDER_BY = "popular";

  const handleScroll = useCallback(() => {
    if (ScrollBottom() && !loading && page < countImage) {
      setPage((prevPage) => prevPage + 1); // Increment page to fetch new set
    }
  }, [loading, page, countImage]);

  const fetchImages = useCallback(async () => {
    setLoading(true);

    const query = searchImg.current?.value.trim();
    const isPopular = !query || query === "popular";
    const keyOfCache = `${isPopular ? "popular" : query}-${page}`;

    if (cached.current[keyOfCache]) {
      setImages((prev) => [...prev, ...cached.current[keyOfCache].images]);
      setCountImage(cached.current[keyOfCache].countImage);
      setLoading(false);
      return;
    }

    try {
      let url;
      if (isPopular) {
        url = `${PHOTOS_API}?page=${page}&per_page=${PER_PAGE}&order_by=${ORDER_BY}&client_id=${process.env.REACT_APP_API_KEY}`;
      } else {
        url = `${API}?query=${query}&page=${page}&per_page=${PER_PAGE}&client_id=${process.env.REACT_APP_API_KEY}`;
      }

      const response = await axios.get<ApiResponse>(url);
      console.log(response);
      const newImages = response.data.results || response.data;
      if (isPopular) {
        setImages(newImages);
      } else {
        setImages((prev) => [...prev, ...newImages]);
      }

      if (response.data.total_pages) {
        setCountImage(response.data.total_pages);
      }

      cached.current[keyOfCache] = {
        images: [...(cached.current[keyOfCache]?.images || []), ...newImages],
        countImage: response.data.total_pages || 1,
      };

      if (!isPopular) {
        SearchHistory(query, newImages);
      }
    } catch (error) {
      console.error(error);
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  }, [page, searchImg.current?.value]);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const handleSearch = (e: React.FormEvent): void => {
    e.preventDefault();
    setPage(1);
    setImages([]);
    fetchImages();
  };
  return (
    <section>
      <article className="search-box">
        <h1 className="search-heading">Search Image</h1>
        {errorMsg && <p className="error-message">{errorMsg}</p>}
        <div>
          <form className="search-form" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="type image name"
              className="search-input"
              ref={searchImg}
            />
          </form>
        </div>
      </article>
      <section className="image-items">
        {images.map((image, index) => (
          <img
            src={image.urls.small}
            alt={image.alt_description}
            key={`${image.id}-${index}`}
            className="image-item"
          />
        ))}
      </section>
      <div className="button"></div>
    </section>
  );
};

export default MainPage;

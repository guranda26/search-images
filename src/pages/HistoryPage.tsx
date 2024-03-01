import React, { useState, useEffect, useCallback } from "react";
import ImageInterface from "../interface/image.interface";

const HistoryPage: React.FC = () => {
  const [history, setHistory] = useState<Record<string, ImageInterface[]>>({});
  const [selectedImages, setSelectedImages] = useState<ImageInterface[]>([]);
  const [page, setPage] = useState(1);
  const imagesPerPage = 20;

  useEffect(() => {
    const loadedHistory = JSON.parse(
      localStorage.getItem("searchHistory") || "{}"
    );
    setHistory(loadedHistory);
  }, []);

  const handleHistoryClick = useCallback(
    (searchTerm: string) => {
      const imagesForTerm = history[searchTerm];
      if (imagesForTerm && imagesForTerm.length > 0) {
        setSelectedImages(imagesForTerm);
        setPage(1);
      } else {
        console.error(`No images found for term: ${searchTerm}`);
      }
    },
    [history]
  );

  const isScrollBottom = useCallback(() => {
    return (
      window.innerHeight + window.scrollY >=
      document.documentElement.offsetHeight
    );
  }, []);

  const handleScroll = useCallback(() => {
    if (isScrollBottom() && selectedImages.length > page * imagesPerPage) {
      setPage((prevPage) => prevPage + 1);
    }
  }, [isScrollBottom, selectedImages.length, page, imagesPerPage]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const displayedImages = selectedImages.slice(0, page * imagesPerPage);

  return (
    <div>
      <h2 className="history-heading">Search History</h2>
      <ul>
        {Object.keys(history).map((term) => (
          <li
            key={term}
            onClick={() => handleHistoryClick(term)}
            style={{ cursor: "pointer" }}
            className="history-list"
          >
            {term}
          </li>
        ))}
      </ul>
      <div className="image-items">
        {displayedImages.map((image, index) => (
          <img
            key={index}
            src={image.urls.small}
            alt={image.alt_description}
            className="image-item"
          />
        ))}
      </div>
    </div>
  );
};

export default HistoryPage;

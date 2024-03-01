import ImageInterface from "../interface/image.interface";

const SearchHistory = (keyword: string, images: ImageInterface[]) => {
  try {
    const history: Record<string, ImageInterface[]> = JSON.parse(
      localStorage.getItem("searchHistory") || "{}"
    );

    const existingImages: ImageInterface[] = history[keyword] || [];
    const newImages = images.filter(
      (image) =>
        !existingImages.find(
          (existingImage: ImageInterface) => existingImage.id === image.id
        )
    );
    history[keyword] = [...existingImages, ...newImages];

    localStorage.setItem("searchHistory", JSON.stringify(history));
  } catch (e) {
    if (e instanceof DOMException && e.name === "QuotaExceededError") {
      console.error("Storage quota exceeded");
    } else {
      console.error("An error occurred:", e);
    }
  }
};
// localStorage.removeItem("searchHistory");
export default SearchHistory;

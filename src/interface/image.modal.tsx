import ImageInterface from "./image.interface";

interface ImageModalProps {
  image: ImageInterface | null;
  stats: {
    downloads: number;
    views: number;
    likes: number;
  };
  onClose: () => void;
}

export default ImageModalProps;

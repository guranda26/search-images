interface ImageInterface {
  urls: {
    small: string;
    full?: string;
  };
  alt_description: string;
  id: number;
  likes?: number;

  statistics?: {
    downloads?: {
      total: number;
    };
    views?: number;
  };
}

export default ImageInterface;

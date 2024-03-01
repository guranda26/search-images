import ImageInterface from "./image.interface";

interface ApiResponse {
  results: ImageInterface[];
  total_pages: number;
}

export default ApiResponse;

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  width?: number;
  height?: number;
}
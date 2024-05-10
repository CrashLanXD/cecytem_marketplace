export type APIFakeStore = {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  creationAt: Date;
  updatedAt: Date;
  category: Category;
};

export type Category = {
  id: number;
  name: Name;
  image: string;
  creationAt: Date;
  updatedAt: Date;
};

export enum Name {
  Clothes = "Clothes",
  Comida = "Comida",
  Electronics = "Electronics",
  Furniture = "Furniture",
  Miscellaneous = "Miscellaneous",
  Shoes = "Shoes",
}

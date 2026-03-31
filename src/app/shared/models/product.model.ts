export interface ProductItem {
  id: number;
  image: string[];
  name: string;
  description?: string;
  categoryId?: number;
  price: number;
}

export interface Ring extends ProductItem {
  sizes: number[];
  material: string;
}

export interface Bracelet extends ProductItem {
  length: number;
  hasCharm: boolean;
}

export type AnyProduct = ProductItem | Ring | Bracelet;

export interface Category {
  id: number;
  name: string;
}

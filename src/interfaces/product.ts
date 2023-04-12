export interface IProduct {
  _id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

export interface ICategory {
  _id: string;
  name: string;
}
export interface IPropsCate {
  onRemoveCate(id: string): unknown;
  category: ICategory[];
}

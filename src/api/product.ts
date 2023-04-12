import { IProduct } from '../interfaces/product';
import instance from './instance';
const user = JSON.parse(localStorage.getItem('user')!);
// export interface IProduct {
//   id: number;
//   name: string;
//   price: number;
//   image: string;
//   description: string;
// }

export const getAll = () => {
  return instance.get('/products');
};
export const create = (product: IProduct) => {
  return instance.post('/products', product);
};
export const get = (id: number) => {
  return instance.get('/products/' + id);
};
export const remove = (id: number | string) => {
  return instance.delete(`/products/${id}`, {});
};
export const update = (product: IProduct) => {
  return instance.put('/products/' + product._id, product);
};

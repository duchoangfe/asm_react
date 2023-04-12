import instance from './instance';

const getAllCategory = () => {
  return instance.get('/categories');
};
const getOneCategory = (id: string | undefined) => {
  return instance.get(`/categories/${id}`);
};
const addCategory = (category) => {
  return instance.post('/categories', category);
};
const deleteCategory = (id: string | undefined) => {
  return instance.delete(`/categories/${id}`);
};
const updateCategory = (category) => {
  return instance.put('/categories/' + category._id, category);
};

export {
  getAllCategory,
  getOneCategory,
  addCategory,
  deleteCategory,
  updateCategory,
};

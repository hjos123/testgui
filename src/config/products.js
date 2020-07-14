import clienteAxios from './request';

const addproduct = async product => {
  return await clienteAxios.post('/products/new', product);
}

export default {
  addproduct
}

import clienteAxios from './request';

const TokenHeader = token =>{
  if(token) {
      clienteAxios.defaults.headers.common['authorization'] = `Bearer ${token}`;
  } else {
      delete clienteAxios.defaults.headers.common['authorization'];
  }
}

export default TokenHeader;

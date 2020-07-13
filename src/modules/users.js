import httpClient from './request';

const register = user => {
  return httpClient.post('/register', user);
}

export default {
  register
}

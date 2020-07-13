import httpClient from './request';
const token_name = "api_token";

const setToken = token => {
  localStorage.setItem(token_name, token);
}

const getToken = () => {
  return localStorage.getItem(token_name);
}

const deleteToken = () => {
  localStorage.removeItem(token_name);
}

const onLogin = (email, password) => {
  return httpClient.post('/login', {email: email, password: password});
}

const onLogout = () => {
  return httpClient.post('/logout');
}

const validToken = () => {
  let token = localStorage.getItem(token_name);
  if (token.trim() !== '')
    return true;
  else
    return false;
}

export default {
  setToken,
  getToken,
  deleteToken,
  onLogin,
  onLogout,
  validToken
}

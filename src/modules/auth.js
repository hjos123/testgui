const token_name = "api_token";
export const url = "http://127.0.0.1:8000/api";

export const setToken = token => {
  localStorage.setItem(token_name, token);
}

export const getToken = () => {
  return localStorage.getItem(token_name);
}

export const deleteToken = () => {
  localStorage.removeItem(token_name);
}

export const validToken = () => {
  let token = localStorage.getItem(token_name);
  if (token.trim() !== '')
    return true;
  else
    return false;
}

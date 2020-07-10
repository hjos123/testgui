let token_name = "api_token";

export const setToken = token => {
  localStorage.setItem(token_name, token);
}

export const getToken = () => {
  return localStorage.getItem(token_name);
}

export const deleteToken = () => {
  localStorage.removeItem(token_name);
}

export const Login = (email, password) => {
  console.log("tu email es: "+email+" tu password es: "+password);
  return "token";
}

export const Logout = () => {
  console.log("saliste del sistema");
  return true;
}

export const validToken = () => {
  let token = localStorage.getItem(token_name);
  if (token)
    return true;
  else
    return false;
}

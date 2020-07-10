let token_name = "api_token";
let url = "http://127.0.0.1:8000/api/";

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
  //console.log("tu email es: "+email+" tu password es: "+password);
  let config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email: email, password: password}),
  }
  fetch(url + "login", config)
  .then(resp => resp.json())
  .then(json => console.log(json));

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

import axios from 'axios';
const urlBase = 'http://127.0.0.1:8000/api';

const get = (url = '', headers = {}) => axios.get(urlBase + url, {
  headers: {
    ...headers
  }
})

const post = (url = '', body = {}, headers = {}) => axios.post(urlBase + url, body, {
  headers: {
    ...headers
  }
})

const put = (url = '', body = {}, headers = {}) => axios.put(urlBase + url, body, {
  headers: {
    ...headers
  }
})

const del = (url = '', headers = {}) => axios.delete(urlBase + url, {
  headers: {
    ...headers
  }
})

export default {
  get,
  post,
  put,
  delete: del,
}

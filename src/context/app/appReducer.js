import {
  ALERT_MESSAGE,
  LOGIN_EXITOSO,
  LOGIN_ERROR,
  REGISTRO_EXITOSO,
  REGISTRO_ERROR,
  CERRAR_SESION,
  USUARIO_EXITOSO
} from '../../types';

export default (state, action) => {
  switch(action.type){
    case USUARIO_EXITOSO:
      return {
        ...state,
        autenticado: true,
        usuario: action.payload,
      }
    case REGISTRO_EXITOSO:
    case LOGIN_EXITOSO:
      localStorage.setItem(process.env.REACT_APP_TOKEN_NAME ,action.payload.token);
      return {
        ...state,
        autenticado: true,
        token: action.payload.token,
        usuario: action.payload.user,
        alert: {
          message: null,
          type: ""
        }
      }
    case LOGIN_ERROR:
    case REGISTRO_ERROR:
    localStorage.removeItem(process.env.REACT_APP_TOKEN_NAME);
      return {
        ...state,
        autenticado: false,
        token: null,
        usuario: null,
        alert: {
          message: action.payload.error,
          type: "danger"
        }
      }
    case CERRAR_SESION:
    localStorage.removeItem(process.env.REACT_APP_TOKEN_NAME);
      return {
        ...state,
        autenticado: false,
        token: null,
        usuario: null,
        alert: {
          message: null,
          type: ""
        }
      }
    case ALERT_MESSAGE:
      return {
        ...state,
        alert: action.payload
      }
    default:
      return state;
  }
}

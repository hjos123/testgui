import React, {useReducer, useEffect} from 'react';
import appContext from './appContext';
import appReducer from './appReducer';
import clienteAxios from '../../config/request';
import TokenHeader from '../../config/request';
import {
  ALERT_MESSAGE,
  LOGIN_ERROR,
  LOGIN_EXITOSO,
  REGISTRO_EXITOSO,
  REGISTRO_ERROR,
  CERRAR_SESION,
  USUARIO_EXITOSO
} from '../../types';

const AppState = props => {
  const initialState = {
    alert: {
      message: null,
      type: ''
    },
    token: localStorage.getItem(process.env.REACT_APP_TOKEN_NAME),
    autenticado: false,
    usuario: null,
  }

  const [state, dispatch] = useReducer(appReducer, initialState);

  useEffect( () => {
    const tokenID = localStorage.getItem(process.env.REACT_APP_TOKEN_NAME);
    if (tokenID !== null && tokenID !== undefined)
      validarUsuario();
  }, []);

  const mostrarAlert = (message, type) => {
    dispatch({
      type: ALERT_MESSAGE,
      payload: {message, type},
    })
  }

  const iniciarSesion = async data => {
    try {
      const resp = await clienteAxios.post('/login', data);
      //console.log(resp);
      dispatch({
        type: LOGIN_EXITOSO,
        payload: resp.data,
      })
    } catch (error) {
      if (error.response !== undefined)
      {
        //console.log(error.response);
        dispatch({
          type: LOGIN_ERROR,
          payload: error.response.data,
        });
      }
      else{
        dispatch({
          type: LOGIN_ERROR,
          payload: []
        });
      }
    }
  }

  const registrarUsuario = async data => {
    try {
      const resp = await clienteAxios.post('/register', data);
      //console.log(resp);
      TokenHeader(resp.data.token);
      dispatch({
        type: REGISTRO_EXITOSO,
        payload: resp.data,
      })
    } catch (error) {
      if (error.response !== undefined)
      {
        //console.log(error.response);
        dispatch({
          type: REGISTRO_ERROR,
          payload: error.response.data,
        })
      }
      else
      dispatch({
        type: REGISTRO_ERROR,
        payload: [],
      });
    }
  }

  const cerrarSesion = async() => {
    try {
      const token = localStorage.getItem(process.env.REACT_APP_TOKEN_NAME);
      const resp = await clienteAxios.post('/logout',{
        headers: {'Authorization': `Bearer ${token}`}
      });
      //console.log(resp);
      dispatch({
        type: CERRAR_SESION
      });
    } catch (error) {
      //console.log(error.response);
      dispatch({
        type: CERRAR_SESION
      });
    }
  }

  const validarUsuario = async () => {
    try {
      const token = localStorage.getItem(process.env.REACT_APP_TOKEN_NAME);
      const resp = await clienteAxios.get('/auth',{
        headers:{'Authorization': `Bearer ${token}`}
      });
      //console.log(resp);
      dispatch({
        type: USUARIO_EXITOSO,
        payload: resp.data
      });
    } catch (error) {
      //console.log(error);
      dispatch({
        type: CERRAR_SESION
      });
    }
  }

  return(
    <appContext.Provider
    value={{
      usuario: state.usuario,
      autenticado: state.autenticado,
      token: state.token,
      alert: state.alert,
      mostrarAlert,
      iniciarSesion,
      registrarUsuario,
      cerrarSesion,
      validarUsuario
    }} >
      {props.children}
    </appContext.Provider>
  );
}

export default AppState;

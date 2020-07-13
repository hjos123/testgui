import React, {useReducer} from 'react';
import appContext from './appContext';
import appReducer from './appReducer';
import { ALERT_MESSAGE } from '../../types';

const AppState = props => {
  const initialState = {
    alert: {
      message: '',
      type: ''
    },
    onloggin: false
  }

  const [state, dispatch] = useReducer(appReducer, initialState);

  const mostrarAlert = (message, type) => {
    dispatch({
      type: ALERT_MESSAGE,
      payload: {message, type},
    })
  }

  return(
    <appContext.Provider
    value={{
      alert: state.alert,
      onloggin: state.onloggin,
      mostrarAlert,
    }} >
      {props.children}
    </appContext.Provider>
  );
}

export default AppState;

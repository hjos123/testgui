import React, {useReducer} from 'react';
import appContext from './appContext';
import appReducer from './appReducer';

const AppState = props => {
  const initialState = {
    onloggin: false
  }

  const [state, dispatch] = useReducer(appReducer, initialState);

  return(
    <appContext.Provider
    value={{
      onloggin: state.onloggin
    }} >
      {props.children}
    </appContext.Provider>
  );
}

export default AppState;

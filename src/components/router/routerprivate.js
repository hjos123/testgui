import React,{useContext} from 'react';
import { Route, Redirect } from 'react-router-dom';
import appContext from '../../context/app/appContext';

const RouterPrivate = ({ component: Component, ...rest }) => {
  const { token } = useContext(appContext);

    return(
      <Route {...rest} render={props => (
          token
              ? <Component {...props} />
              : <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )} />
    )
}

export default RouterPrivate;

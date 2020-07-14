import React, {useState, useContext} from 'react';
import './login.css';
import pixan from '../../assets/img/brand/pixan.png';
import Formlogin from './formlogin';
import Formregister from './formregister';
import appContext from '../../context/app/appContext';

const Login = props => {
  const { token } = useContext(appContext);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [showLogin, setShowLogin] = useState(true);

  const changerForm = () =>{
    setUser({
      name: "",
      email: "",
      password: ""
    });
    setShowLogin(!showLogin);
  }

  const Changer = e => {
    e.preventDefault();
    setUser({
        ...user,
        [e.target.name] : e.target.value
    });
  }

  if (token !== null && token !== undefined)
    props.history.push('/productos');

  return(
    <div className="wallpaper-login">
      <div className="container h-100">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-md-7 mt-5 mb-5 text-center text-white">
            <img
            src={pixan} alt="logo"
            className="img-fluid mb-4" />
          <h2 className="title-test-primary">¡Lo que tu quieras!</h2>
            <span className="text-test text-white">
              La plataforma lider en compra y venta
            </span>
            <span className="text-test text-white">
              de productos en linea en Mexico.
            </span>
            <button
            className="btn btn-default btn-second-test mt-4"
            onClick={changerForm}>
              { showLogin ? 'Registrate' : 'Inicia sesion' }
            </button>
          </div>

          <div className="col-md-5 mt-4 mb-4">
            <div className="card p-2">
              <div className="card-body">
                <Formlogin
                history={props.history}
                showLogin={showLogin}
                user={user}
                Changer={Changer} />

                <Formregister
                history={props.history}
                showLogin={showLogin}
                user={user}
                Changer={Changer} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;

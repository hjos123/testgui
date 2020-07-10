import React,{useState} from 'react';
import './login.css';
import pixan from '../../assets/img/brand/pixan.png';
import Formlogin from './formlogin';
import Formregister from './formregister';
import Alerts from '../alert/alerts';

export default function Login() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [message, setMessege] = useState({
    text: "",
    type: ""
  });
  const [showLogin, setShowLogin] = useState(true);

  const changerForm = () =>{
    setUser({
      name: "",
      email: "",
      password: ""
    });
    setMessege({
      text: "",
      type: ""
    });
    setShowLogin(!showLogin);
  }

  const Changer = (e) => {
    e.preventDefault();
    setUser({
        ...user,
        [e.target.name] : e.target.value
    });
  }

  return(
    <div className="row justify-content-center align-items-center">
      <div className="col-md-5 mt-5 mb-5 text-center text-white">
        <img
        src={pixan} alt="logo"
        className="img-fluid mb-4" />
        <h2>¡Lo que tu quieras!</h2>
        <span className="text-test">
          La plataforma lider en compra y venta
        </span>
        <span className="text-test">
          de productos en linea en Mexico.
        </span>
        <button
        className="btn btn-primary mt-4"
        onClick={changerForm}>
          { showLogin ? 'Registrate' : 'Inica sesion' }
        </button>
      </div>

      <div className="col-md-4 mt-4 mb-4">
        <div className="card p-2">
          <div className="card-body">
            <Formlogin
            setMessege={setMessege}
            showLogin={showLogin}
            user={user}
            Changer={Changer} />

            <Formregister
            setMessege={setMessege}
            showLogin={showLogin}
            user={user}
            Changer={Changer}
            changerForm={changerForm} />

            <Alerts
            setMessege={setMessege}
            message={message} />
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import './login.css';
import pixan from '../../assets/img/brand/pixan.png';
import Formlogin from './formlogin';
import Formregister from './formregister';
import Alerts from '../alert/alerts';

export default class Login extends React.Component {
  state = {
    user: {
      name: "",
      email: "",
      password: "",
      repeatpassword: ""
    },
    message: {
      text: "",
      type: ""
    },
    showLogin: true
  }

  Changer = (e) => {
    e.preventDefault();
    this.setState({
      user : {
        ...this.state.user,
        [e.target.name] : e.target.value
      }
    });
  }

  changerForm = () =>{
    this.setState({
      user:{
        email: "",
        password: "",
        name: ""
      },
      showLogin: !this.state.showLogin
    });
  }

  setMessege = (text, type) => {
    this.setState({
      message:{
        text,
        type
      }
    });
  }

  render(){
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
            onClick={this.changerForm}>
              { this.state.showLogin ? 'Registrate' : 'Inica sesion' }
            </button>
          </div>

          <div className="col-md-4 mt-4 mb-4">
            <div className="card p-2">
              <div className="card-body">
                <Formlogin
                setMessege={this.setMessege}
                showLogin={this.state.showLogin}
                user={this.state.user}
                Changer={this.Changer} />

                <Formregister
                setMessege={this.setMessege}
                showLogin={this.state.showLogin}
                user={this.state.user}
                Changer={this.Changer} />

                <Alerts
                setMessege={this.setMessege}
                message={this.state.message} />
              </div>
            </div>
          </div>
        </div>
    );
  }
}

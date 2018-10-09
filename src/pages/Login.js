import React, { Component } from 'react';
import Email from '../formElements/Email';
import Password from '../formElements/Password';
//import {Route} from 'react-router';
import {Link} from 'react-router-dom';
import './Base.css';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToReferrer: false,
      user: {
        email: '',
        password: ''
      }
    }
    this.validateLogin = this.validateLogin.bind(this);
  }

  validateLogin = (event) => {
    event.preventDefault();
    console.log('inicio de sesion', event.target[0].value, event.target[1].value);
  }
  render(){
    return(
      <section className="bg-image flex-container">
        <div className="form-content">
        <h3 className="form-signin-heading">Inicio Sesion</h3>
        <form className="box form-register" onSubmit={this.validateLogin}>
          <Email placeholder="tumail@me.com" value={this.state.user.email} />
          <Password placeholder="ingresa tu contraseña" value={this.state.user.email} />
          <div className="center">
            <button className="button" type="submit" onClick={ (event)=> this.validateLogin.bind(this)}> Inicia Sesion</button>
          </div>

          <h4>¿No eres usuario? <br/>
          <span><Link to="registro">Regístrate</Link></span></h4>

        </form>
        </div>

      </section>
    )
  }
}
export default Login;


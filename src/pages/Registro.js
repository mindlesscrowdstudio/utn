import React, { Component } from 'react';
import Nombre from '../formElements/Nombre';
import Email from '../formElements/Email';
import Password from '../formElements/Password';
import {Link} from 'react-router-dom';

import './Base.css';

class Registro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    let name = event.target.nombre.value
    let email = event.target.email.value
    let password = event.target.password.value
    let newUser= {nombre: name,
                  email: email,
                  password: password
                }

    this.setState({
            users: [...this.state.users,newUser]
    })
  }
  render(){
    return (
      <section className="bg-image flex-container">
        <div className="form-content">
        <h3 className="form-signin-heading">Registrate</h3>
        <form className="box form-register" onSubmit={this.handleFormSubmit}>
          <Nombre placeholder='Nombre'/>
          <Email placeholder="tumail@me.com" />
          <Password placeholder="ingresa un password"/>
          <div className="center">
            <button className="button" type="submit">Registrate</button></div>
          <h4>¿Ya eres usuario? <br/>
          <span><Link to="login">Inicia sesión</Link></span></h4>
        </form>

        </div>
      </section>
    )
  }
}
export default Registro;


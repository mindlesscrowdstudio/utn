import React, { Component } from 'react';
import Nombre from '../formElements/Nombre';
import Email from '../formElements/Email';
import Password from '../formElements/Password';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router-dom';
import firebase from './../Config/firebase.js';
import './Base.css';

class Registro extends Component {
  constructor(props) {
    super(props);

    this.state = {

      nombre: '',
      email: '',
      password: '',
    }
    /* This is done because in JavaScript, class methods are not bound by default. If this is not done, the handleChange() function will return undefined when the onChange event is called. */
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);

  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('handleFSubmit', this.state);
    //var database = firebase.database();
    let email= this.state.email;
    let password = this.state.password;
    /* database.ref('usuarios/').push({
      nombre: this.state.nombre,
      email: this.state.email,
      password: this.state.password
    }) */

    firebase
      .auth()
      .createUserWithEmailAndPassword(email,password)
      .then((user) => {
        console.log('user', user);
        this.props.history.push('/');
      })
      .catch((error) => {
        console.log('error',error);
      })


    this.handleClearForm();
  }

  handleClearForm()  {
    this.setState({
        nombre: '',
        email: '',
        password: ''

    });
  }

  handleChange(event) {
    let target = event.target;
    let name = target.name;
    let value = target.type === "checkbox" ? target.checked : target.value;
    //let {user} = this.state;
    console.log(name, value);
    this.setState({
      [name]:value
    });

  }
  render(){

    return (
      <section className="bg-image flex-container">
        <div className="form-content">
        <h3 className="form-signin-heading">Registrate</h3>
        <form className="box form-register" onSubmit={this.handleFormSubmit}>

          <Nombre placeholder={"nombre"} name={"nombre"} value={this.state.nombre} handleChange={this.handleChange} type={"text"} />

          <Email placeholder={"tumail@me.com"} name={"email"} value={this.state.email} handleChange={this.handleChange} type={"email"} />

          <Password placeholder={"ingresa un password"} name={"password"} type={"password"} value={this.state.password} handleChange={this.handleChange}/>{" "}
          <div className="center">

          <button className="button" type="submit">Registrate</button>

          </div>

          <h4>¿Ya eres usuario? <br/>
          <span><Link to="login">Inicia sesión</Link></span></h4>

        </form>

        </div>
      </section>
    )
  }
}
export default Registro;


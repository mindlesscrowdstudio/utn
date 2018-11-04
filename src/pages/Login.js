import React, { Component } from 'react';
import Email from '../formElements/Email';
import Password from '../formElements/Password';
import {Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';
import './Base.css';
 import firebase from './../Config/firebase.js';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }
    this.validateLogin = this.validateLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }


  validateLogin = (event) => {
    event.preventDefault();
    console.log('inicio de sesion', event.target[0].value, event.target[1].value);
    let email = event.target[0].value;
    let password = event.target[1].value;

      // Sign in with email and pass.
      firebase
        .auth()
        .signInWithEmailAndPassword(email,password)
        .then((user) => {
          this.props.history.push('/');
        })
        .catch(
        function(error) {
          //Handle Errors
          var errorCode = error.code;
          var errorMessage = error.message;

          if (errorCode === 'auth/wrong-password') {
            alert('wrong password');
          } else {
            alert(errorMessage);
          }
          console.log('error',error);

        }
      )




  }
  handleChange = (event) => {
    event.preventDefault();
    let target = event.target;
    let name = target.name;
    let value = target.value;
    console.log(name, value);
    this.setState({
      [name]:value
    });
  }

  render(){
    /* if (this.state.redirect === true) {
      return <Redirect to='/' ></Redirect>
    } */
     return(

      <section className="bg-image flex-container">
        <div className="form-content">
        <h3 className="form-signin-heading">Inicio Sesion</h3>
        <form className="box form-register" onSubmit={this.validateLogin}>
          <Email placeholder= {"tumail@me.com"} value={this.state.email} name={"email"}  handleChange= {this.handleChange} type={"email"} />

          <Password placeholder= {"ingresa tu contraseña"} value={this.state.password} name={"password"} type={"password"} handleChange={this.handleChange} />

          <div className="center">
            <button className="button" type="submit"> Inicia Sesion</button>
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


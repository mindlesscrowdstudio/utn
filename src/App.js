import React, { Component } from 'react';
import * as firebase from 'firebase';
import './css/App.css';
//import Menu from './Menu';
import './css/Form.css';
import {Route} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import Home from './pages/Home';
import Registro from './pages/Registro';
import Login from './pages/Login';
import PerfilPage from './pages/PerfilPage';
import Menu from './Menu';


 // Initialize Firebase
 var config = {
  apiKey: "AIzaSyDzns0Dsi_3LYcdN-Fy3ky3rWL6q_0P4TI",
  authDomain: "socialutn.firebaseapp.com",
  databaseURL: "https://socialutn.firebaseio.com",
  projectId: "socialutn",
  storageBucket: "socialutn.appspot.com",
  messagingSenderId: "94925619755"
};
firebase.initializeApp(config);

class App extends Component {
  constructor(props) {
    super(props);
    console.log('firebase', firebase.database());
    this.state = {
      usuarios: []
    }

  }

  render() {
    return (
/**
 * The <BrowserRouter> should be used when you have a server that will handle dynamic requests (knows how to respond to any possible URI), while the <HashRouter> should be used for static websites (where the server can only respond to requests for files that it knows about).
 */
  <BrowserRouter>
    <div className="App">
      <div className="nav-container">
        <Menu/>
      </div>
      <div className="header-spacer"></div>


    <Switch>
      <Route exact path="/" component= {Home} />
      <Route path="/home" component= {Home} />
      <Route path="/registro" component = {Registro} />
      <Route path="/login" component = {Login} />
      <Route path="/PerfilPage/:id" component = {PerfilPage} />
    </Switch>
    </div>
  </BrowserRouter>
    );
  }



}

export default App;

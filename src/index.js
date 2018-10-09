import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import Home from './pages/Home';
//import Menu from './Menu';
//import Registro from './pages/Registro';
//import Login from './pages/Login';
//import {Route} from 'react-router';
//import {BrowserRouter} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
//import PerfilPage from './pages/PerfilPage';


ReactDOM.render((
  <App />
), document.getElementById('root'));
registerServiceWorker();

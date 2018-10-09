import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from './img/logo.png';

class Menu extends Component {

  render() {
    return (
      <div>
      <nav className="flex-container">
        <div className="flex-item test">
          <div className="logo">
            <div className="img-wrap">
              <img src={logo} alt="Olympus"/>
            </div>
            <div className="title-block">
            <h1 className="logo-title">UTN</h1>
          </div>
          </div>
        </div>
        <ul role="navigation" className="menu flex-item">
          <li><Link to="/home"><i className="material-icons">home</i>Home</Link></li>
          <li><Link to="admin"><i className="material-icons img-circle">face</i>admin</Link></li>
          <li><Link to="login"><i className="material-icons">flash_on</i>login</Link></li>
          <li><Link to="registro"><i className="material-icons">lock_open</i>registro</Link></li>
        </ul>
      </nav>
      </div>
    );


  }
}
export default Menu;
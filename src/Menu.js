import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import logo from './img/logo.png';
import ProtectedRoute  from './components/ProtectedRoute';
import Home from './pages/Home';
import Registro from './pages/Registro';
import Login from './pages/Login';
import PerfilPage from './pages/PerfilPage';
import Admin from './pages/Admin';
class Menu extends Component {

  render() {
    return (
      <Router>
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
              { this.props.authenticated ? (

                <div style= {{display:"inline-block"}}>
                  <li><Link to="/home"><i className="material-icons">home</i>Home</Link></li>

                  <li><Link to="/admin"><i className="material-icons img-circle">face</i>admin</Link></li>
                  <li><Link to="login"><i className="material-icons">flash_on</i>login</Link></li>
                </div>
              ) : (
                <div style= {{display:"inline-block"}}>
                  <li><Link to="login"><i className="material-icons">flash_on</i>login</Link></li>
                  <li><Link to="registro"><i className="material-icons">lock_open</i>registro</Link></li>
                </div>
              )}
            </ul>

        <Switch>

            <Route exact path="/home" component= {Home} />
            <Route authenticated={this.props.authenticated} path="/login" component = {Login} />
            <Route authenticated={this.props.authenticated} path="/registro" component = {Registro} />

            <Route path="/PerfilPage/:id" component = {PerfilPage} />

            <ProtectedRoute authenticated={this.props.authenticated} path="/" component={Home} />
            <ProtectedRoute authenticated={this.props.authenticated} path="/admin" component={Admin} />
            </Switch>
        </nav>

        </div>
        </Router>

    );
  }
}
export default Menu;
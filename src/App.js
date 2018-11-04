import React, { Component } from 'react';
import './css/App.css';
import './css/Form.css';
import firebase from './Config/firebase';
import Menu from './Menu';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false
    }

  }
  componentDidMount () {
    console.log('did mount');
    /**componentDidMount() is a lifecycle method that is executed after the first render */
    firebase.auth().onAuthStateChanged( (authenticated) => {
      console.log('auth', authenticated);
      authenticated ? this.setState( () => ({
        authenticated: true,
      }) )
      : this.setState( () => ({
        authenticated: false,
      }) );
    });
  }
  render() {
    return (
/**
 * The <BrowserRouter> should be used when you have a server that will handle dynamic requests (knows how to respond to any possible URI), while the <HashRouter> should be used for static websites (where the server can only respond to requests for files that it knows about).
 */

    <div className="App">
      <div className="nav-container">
        <Menu authenticated= {this.state.authenticated}/>
      </div>
      <div className="header-spacer"></div>
    </div>

    );
  }



}

export default App;

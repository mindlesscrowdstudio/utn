import React, {Component} from 'react';
import Perfiles from './Perfiles';
import '../css/Perfil.css';

class Home extends Component {


  render() {
      return (
        <div className="flex-container container-fluid bg-color">
            <div className="flex-item ">
              <Perfiles/>
            </div>
        </div>
      )

  }


}
export default Home;




//import React from 'react';
import React, {Component} from 'react';
import './css/Perfil.css';
import { Link } from 'react-router-dom';
import topHeadItem from './img/topHeadItem.jpg';

class Perfil extends Component {
  constructor(props){
    super(props);
    this.state = {
      leyenda: 'Agregar Amigo',
      isAmigo: false
    }
  }

  agregarAmigo() {
    //event.preventDefault();
    this.setState({
      leyenda: 'Amigo Agregado',
      isAmigo: true
    })
  }

  render() {
    const perfil = this.props.perfil;
    const isAmigo = this.state.isAmigo;
    return (<div className="ui-block inline-f">
    <div className="profile-item">
      <div className="card-body">
        <div className="profile-header-thumb">
          <img src={topHeadItem} alt= {perfil.cell} />
        </div>
        <div className="profile-item-content">
          <div className="profile-avatar">
            <div className="author-thumb">
              <img src={perfil.picture.medium} className="bradius" alt= {perfil.cell} />
            </div>
            <div className="author-content">
              <h4 className="h4 author-name">
              {/*le pasamos mediante link el perfil que ya habiamos pedido*/}
                <Link to={{
                pathname : `../PerfilPage/${perfil.id.value}`,
                state: {
                  perfil: perfil,
                  isAmigo: isAmigo
                }
                }}> {perfil.name.first} {perfil.name.last}
                </Link>
              </h4>
              <h4 className="author-name">{perfil.gender} | age: {perfil.dob.age} </h4>
              <div className="country">{perfil.location.state}</div>
            </div>
          </div>
          <button type="button" className="button">
          <a onClick={this.agregarAmigo.bind(this)}>
                 {this.state.leyenda}
          </a></button>
        </div>
      </div>

    </div>
  </div>
  )
  }
}


export default Perfil;



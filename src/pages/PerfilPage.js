import React, {Component} from 'react';
import '../css/Perfil.css';
import topHeader from '../img/topHeader.png';
class PerfilPage extends Component {
  constructor(props){
    super (props);
    console.log('props PP',props);
  }



  render() {

    return (
    <section className="profile">

      <div className="flex-container-column container-fluid">
        <div className="flex-item">
          <div className="ui-block">
            <div className="top-header top-header-favorit">
              <div className="top-header-thumb">
                <img src={topHeader} alt="topHeader"/>
                <div className="top-header-author">
                  <div className="author-thumb">
										<img src={this.props.location.state.perfil.picture.large} alt="author"/>
									</div>
                  <div className="author-content">
										<a className="h3 author-name">{this.props.location.state.perfil.name.first}</a>
										<div className="country">{this.props.location.state.perfil.location.street}  | {this.props.location.state.perfil.location.city}</div>
									</div>
                </div>
              </div>
              <div className="profile-section">
                <ul className="profile-menu">
                  <li>
                    <i className="material-icons ">face</i><br/>
                    {this.props.location.state.perfil.login.username}
                  </li>
                  <li>
                    <i className="material-icons ">alternate_email</i><br/>
                    {this.props.location.state.perfil.email}</li>
                  <li>
                    <i className="material-icons ">call</i><br/>
                    {this.props.location.state.perfil.phone}
                  </li>
                  <li>
                    <i className="material-icons ">language</i><br/>{this.props.location.state.perfil.location.state}
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
        </div>
      </section>
    )
  }





}

export default PerfilPage;


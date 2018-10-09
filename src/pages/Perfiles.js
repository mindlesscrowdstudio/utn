
import React, {Component} from 'react';
import Perfil from '../Perfil';
import '../css/Perfil.css';

class Perfiles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      isLoaded: false,
      perfiles: [],
    }
  }
  componentWillMount() {
    //let url1 = 'https://jsonplaceholder.typicode.com/users'
    let url2 = 'https://randomuser.me/api/?page=1&results=16&nat=es'
    fetch(url2)
      .then(response => response.json())
      .then(
      (result) => {
        this.setState({
          isLoaded:true,
          perfiles: result.results

        })
      },
      (error) => {
        console.log('error en request:',error);
        this.setState({
          isLoaded:true,
          error:true
        })
      }
    )
  }


  render() {
    const { error, isLoaded, perfiles} = this.state;
    if (error) {
      return (
        <div>{error.message}</div>
      )
    } else if(!isLoaded) {
      return (
      <div><h2>Loading...</h2></div>
      )
    } else {
      return (
          <div className="flex-container">
          <section className="profile">
            {perfiles.map(
              perfil =>
              <Perfil perfil = {perfil} key={perfil.id.value}
              />)
            }
          </section>
          </div>
      )
    }
  }
}
export default Perfiles;









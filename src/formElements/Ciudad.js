import React, { Component } from 'react';
import './../css/Form.css';

class Ciudad extends Component {
  constructor(props) {
    super(props);
    console.log(props);

  }

  render() {
    let ciudades = this.props.options;

    let optionItems = ciudades.map(
      (ciudad) => <option key={ciudad.toString()} value={ciudad}>{ciudad}</option>
    )

    return (
      <label>
      Ciudad:
      <select  onChange={this.props.onChangeSelect}
      >
      <option value="" disabled>
          {this.props.placeholder}
        </option>
      {optionItems}
      </select>
    </label>
    );
  }

}
export default Ciudad;
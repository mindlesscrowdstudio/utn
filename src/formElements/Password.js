import React from 'react';
import './../css/Form.css';

var Password = (props) => {
  return (
    <div>
      <label>
        Password
        <input id="password" type={props.type} name={props.name} placeholder= {props.placeholder} autoComplete="true" onChange={props.handleChange} required />
      </label>
    </div>
  )
}

export default Password;

import React from 'react';
import './../css/Form.css';

var Email = (props) => {
  return (
    <div>
    <label>
     Mail
    <input id="email" type={props.type} placeholder={props.placeholder} name={props.name}  onChange={props.handleChange} autoComplete="true"  value= {props.value} required/>
    </label>
    </div>
  );
}

export default Email;
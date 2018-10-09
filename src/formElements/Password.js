import React from 'react';
import './../css/Form.css';

var Password = (props) => {
  return (
    <div>
      <label>
        Password
        <input id="password" type="password" name="password" placeholder= {props.placeholder} autoComplete="true" required />
      </label>
    </div>
  )
}

export default Password;

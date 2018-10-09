import React from 'react';
import './../css/Form.css';

var Email = (props) => {
  return (
    <div>
    <label>
     Mail
    <input id="email" type="email" placeholder={props.placeholder} name="email"  autoComplete="true"  required/>
    </label>
    </div>
  );
}

export default Email;
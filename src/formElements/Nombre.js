import React from 'react';
import './../css/Form.css';

/**
 * Arrow function es como decir
 *
 * var Nombre = function() {}
 */
var Nombre = (props) => {
  return (
    <div>
    <label>
      Nombre
      <input id="nombre" name="nombre" type="text" placeholder ={props.placeholder} required/>
    </label>
    </div>
  );
}

export default Nombre;
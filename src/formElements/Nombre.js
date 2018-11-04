import React from 'react';
import './../css/Form.css';

/**
 * Arrow function es como decir
 *
 * var Nombre = function() {}
 */
const Nombre = (props) => {
  return (
    <div>
    <label>
      Nombre
      <input id="nombre" type={props.type} name={props.name} placeholder ={props.placeholder}  value= {props.value} onChange={props.handleChange} required
      />
    </label>
    </div>
  );
}

export default Nombre;
import React from "react";
import './../css/Form.css';

const Input = props => {
  console.log(props);
  return (
    <div>
      <label htmlFor={props.name}>
        {props.title}
      </label>
      <input
        id={props.name}
        name={props.name}
        type={props.inputype}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        {...props}
      />
    </div>
  );
};

export default Input;
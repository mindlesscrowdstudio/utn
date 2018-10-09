import React from 'react';
import './../css/Form.css';

var FileUpload = (props) => {
  console.log('file data',props);
  return (
    <label>
      Foto:
      <input type="file" onChange= {props.onChangeFile}/>
    </label>

  );
}
export default FileUpload;
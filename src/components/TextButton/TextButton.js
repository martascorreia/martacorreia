import React from 'react';
import "./TextButton.css";
import "../../index.css"

const TextButton = ({text, acceptPermissions, className}) => {

  return (
    <div className="textButton">
      <button id="textBtn" className={className} onClick={acceptPermissions}>{text}</button>
    </div>
  );
}

export default TextButton;

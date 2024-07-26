import React from 'react';
import "./TextButton.css";
import "../../index.css"

const TextButton = ({ text, elementId, className }) => {

  const onClick = () => {
    if(elementId) document.getElementById(elementId).scrollIntoView({ behavior: 'smooth' })
  };

  return (
    <div className="textButton">
      <button id="textBtn" className={className} onClick={onClick}>{text}</button>
    </div>
  );
}

export default TextButton;

import React from 'react';
import "./TextButton.css";
import "../../index.css"

const TextButton = ({ text, elementId, className }) => {

  const onClick = () => {
    if(elementId){
      //scroll
      var elem = document.getElementById(elementId);
      elem.scrollIntoView({ behavior: 'smooth' });

      //open section, if not already open
      var titleSection = elem.querySelector("#titleSection");
      var sectionClass = elementId + "ID";
      var target = document.querySelector("." + sectionClass);
      if (titleSection && target && target.style.display === 'none') {
        titleSection.click();
      }
    } 
  };

  return (
    <div className="textButton">
      <button id="textBtn" className={className} onClick={onClick}>{text}</button>
    </div>
  );
}

export default TextButton;

import React from 'react';
import "../../index.css"
import "@fontsource/lexend-deca";
import "./Main.css"
import Summary from './Summary/Summary';
import Education from './Education/Education';
import Experience from './Experience/Experience';
import Projects from './Projects/Projects';

function Main() {

  const changeVisibility = (section) => {
    var elements = document.getElementsByClassName(section);
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i]
      if (element.style.display === 'none')
        element.style.display = ''
      else element.style.display = 'none'
    }
  };

  return (
    <div className="Main" id="main">
      <Summary changeVisibility={changeVisibility} />
      <Experience changeVisibility={changeVisibility} />
      <Education changeVisibility={changeVisibility} />
      <Projects changeVisibility={changeVisibility} />
    </div>
  );
}
export default Main;
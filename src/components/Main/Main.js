import React from 'react';
import "../../index.css"
import "@fontsource/lexend-deca";
import "./Main.css"
import Summary from './Summary/Summary';
import Education from './Education/Education';
import Experience from './Experience/Experience';

function Main() {
    return (
    <div className="Main" id="main">
      <Summary/>
      <Education/>
      <Experience/>
    </div>
  );
}
export default Main;
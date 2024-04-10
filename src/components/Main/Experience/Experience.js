import React from 'react';
import "../../../index.css"
import "./Experience.css"
import "@fontsource/lexend-deca";

function Experience() {
    return (
    <div className="Experience">
      <div className="titleSection">
        EXPERIENCE
      </div>
      <div className="contentSection" >
        <div className="section1">
          <a className='summaryName'>Marta Correia</a>
        </div>
        <div className="section2">
          <div className="summarySummary">
            <a className='summaryTextTitle'>Hi! Welcome to my personal website!</a>
            <a className='summaryText'>I'm Marta Correia and I'm a Software Developer.
              I've always had a big passion for logical problems and arts, so I chose this field
              so I could get a good mix of the two.</a>
            <br/>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Experience;
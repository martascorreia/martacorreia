import React from 'react';
import "../../../index.css"
import "./Projects.css"
import "@fontsource/lexend-deca";
import Project from "./Project"
import mcLogo from "./../../../resources/images/sondagem4A.jpeg"

function Projects({ changeVisibility }) {
  return (
    <div className="Section" id="projects">
      <div id="titleSection" onClick={() => changeVisibility("projectsID")}>
        PROJECTS
      </div>
      <div id="projectsSection" className='projectsID'>
        <div id="smallerSection">
          <Project
          image={mcLogo}
          title="Monte dos Castelinhos WebAR" 
          description={"Web application for Monte dos Castelinhos, with AR and VR experiences"}
          skills={"REACT A-FRAME THREE.JS HTML CSS"}
          codeLink={"https://github.com/martascorreia/MonteDosCastelinhosWebAR"}
          liveLink={"https://martascorreia.github.io/MonteDosCastelinhosWebAR/"}/>
        </div>
      </div>
    </div>
  );
}
export default Projects;
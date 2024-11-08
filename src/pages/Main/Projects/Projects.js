import React from 'react';
import "../../../index.css"
import "./Projects.css"
import "@fontsource/lexend-deca";
import Entry from "../../../components/Entry/Entry"
import EntryIdentification from "./../../../components/Entry/EntryIdentification"
import Project from "./Project"
import mcLogo from "./../../../resources/images/sondagem4A.jpeg"
import { faCertificate, faList } from "@fortawesome/free-solid-svg-icons";

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
          description={"MonteDosCastelinhosWebAR, a Web Augmented Reality application for Monte dos Castelinhos"}
          skills={["React.js", "A-Frame", "Three.js", "HTML", "CSS"]}
          codeLink={"https://github.com/martascorreia/MonteDosCastelinhosWebAR"}
          liveLink={"https://martascorreia.github.io/MonteDosCastelinhosWebAR/"}/>
        </div>
        <div id="smallerSection" >
          <Project />
        </div>
        <div id="smallerSection">
          <Project />
        </div>
        <div id="smallerSection" >
          <Project />
        </div>
      </div>
    </div>
  );
}
export default Projects;
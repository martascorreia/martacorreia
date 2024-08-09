import React from 'react';
import "../../../index.css"
import "./Projects.css"
import "@fontsource/lexend-deca";
import Entry from "../../../components/Entry/Entry"
import EntryIdentification from "./../../../components/Entry/EntryIdentification"
import fculLogo from "./../../../resources/images/fcul.png"
import { faCertificate, faList } from "@fortawesome/free-solid-svg-icons";

function Projects({ changeVisibility }) {
  return (
    <div className="Section" id="projects">
      <div id="titleSection" onClick={() => changeVisibility("projectsID")}>
        PROJECTS
      </div>
      <div id="projectsSection" className='projectsID'>
        <div id="smallerSection">
        </div>
        <div id="smallerSection" >
        </div>
      </div>
    </div>
  );
}
export default Projects;
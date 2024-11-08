import React from 'react';
import "../../../index.css"
import "./Projects.css"
import "@fontsource/lexend-deca";
import Entry from "../../../components/Entry/Entry"
import EntryIdentification from "./../../../components/Entry/EntryIdentification"

function Project({ image, title, description, skills, codeLink, liveLink }) {
  return (
    <div className="Section Project" id="project">
      <div id="projectImage">
        <img src={image} alt="logo picture" className='projectImg' />
      </div>
      <div id="projectTitle">
        {title}
      </div>
      <div id="projectDescription">
        {description}
      </div>
      <div id="projectSkills">
        {skills}
      </div>
      <div id="projectLinks">
        <a href={codeLink} target="_blank" rel="noopener noreferrer">
          <button id="projectsLinkBtn">Code</button>
        </a>
        <a href={liveLink} target="_blank" rel="noopener noreferrer">
          <button id="projectsLinkBtn">Live</button>
        </a>
      </div>
    </div>
  );
}
export default Project;
import React from 'react';
import "../../../index.css"
import "./Projects.css"
import "@fontsource/lexend-deca";
import Project from "./Project"
import mcSondagem4 from "./../../../resources/images/sondagem4A.jpeg"
import poster from "./../../../resources/images/poster.png"

function Projects({ changeVisibility }) {
  return (
    <div className="Section" id="projects">
      <div id="titleSection" onClick={() => changeVisibility("projectsID")}>
        PROJECTS
      </div>
      <div id="projectsSection" className='projectsID'>
        <div id="smallerSection">
          <Project
          image={mcSondagem4}
          title="Monte dos Castelinhos WebAR" 
          description={"Web application for Monte dos Castelinhos, with AR and VR experiences. Developed as a final case study for my Master thesis."}
          skills={"React.js A-Frame Three.js HTML CSS"}
          links={{ 
            Code: "https://github.com/martascorreia/MonteDosCastelinhosWebAR",
            Live: "https://martascorreia.github.io/MonteDosCastelinhosWebAR/",
            Thesis: "https://repositorio.ulisboa.pt/handle/10400.5/95457"
          }}
          />         
        </div>
        <div id="smallerSection">
          <Project
          image={poster}
          title="Poster WebAR" 
          description={"Web AR experience to enhance my thesis's poster for the LASIGE WORKSHOP 2024. Scan the poster with the application to see the AR version."}
          skills={"MindAR HTML"}
          links={{ 
            Code: "https://github.com/martascorreia/posterWebAR",
            Live: "https://martascorreia.github.io/posterWebAR/",
            Poster: "https://raw.githubusercontent.com/martascorreia/posterWebAR/refs/heads/main/poster.png"
          }}/>
        </div>
      </div>
    </div>
  );
}
export default Projects;
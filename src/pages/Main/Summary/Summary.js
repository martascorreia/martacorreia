import React from 'react';
import "../../../index.css"
import "./Summary.css"
import "@fontsource/lexend-deca";
import profileImage from "./../../../resources/images/profile.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faAt, faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
function Summary({ changeVisibility }) {

  return (
    <div className="Section" id="aboutMe">
      <div id="titleSection" onClick={() => changeVisibility("summaryID")}>
        ABOUT ME
      </div>
      <div id="section" className='summaryID'>
        <div className="summarySection">
          <div className="summaryProfile">
            <img src={profileImage} alt="profile picture" className='summaryImage' />
            <a className='summaryName'>Marta Correia</a>
          </div>
          <div className="summarySummary">
            <a className='summaryTextTitle'>Hi, welcome to my website :)</a>
            <a className='summaryText'>My name is Marta Correia and I'm a Junior Software Developer.
              I've always had a big passion for logical problems and arts, so I came to Software Development
              for the mix of the two.</a>
          </div>
        </div>
      </div>
      <div id="section" className='summaryID'>
        <div className="summarySection">
          <div className="summarySummary">
            <div className="summaryContacts">
              <div className='summaryContact'>
                <FontAwesomeIcon className='summaryContactIcon' icon={faLocationDot} />
                <div>Lisbon, Portugal</div>
              </div>
              <div className='summaryContact'>
                <FontAwesomeIcon className='summaryContactIcon' icon={faAt} />
                <div>correiamarta2@gmail.com</div>
              </div>
              <div className='summaryContact'>
                <FontAwesomeIcon className='summaryContactIcon' icon={faGithub} />
                <a href="https://github.com/martascorreia" target="_blank" className="nav-link">martascorreia</a>
              </div>
              <div className='summaryContact'>
                <FontAwesomeIcon className='summaryContactIcon' icon={faLinkedin} />
                <a href="https://www.linkedin.com/in/martascorreia/" target="_blank" className="nav-link">martascorreia</a>
              </div>

              <div className='summaryContact'>
                <FontAwesomeIcon className='summaryContactIcon' icon={faAddressCard} />
                <a href="https://drive.google.com/file/d/1i7YwiVXUgb9wYZBYWTe6VrHj0Wrco6tG/view" target="_blank" className="nav-link"> curriculum vitae</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Summary;
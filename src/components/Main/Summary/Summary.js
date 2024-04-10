import React from 'react';
import "../../../index.css"
import "./Summary.css"
import "@fontsource/lexend-deca";
import profileImage from "./../../../resources/images/profile.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faAt, faAddressCard} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
function Summary() {
  return (
    <div className="Summary" id="summary">
      <div className="titleSection">
        ABOUT ME
      </div>
      <div className="contentSection" >
        <div className="section1">
          <img src={profileImage} alt="profile picture" className='summaryImage' />
          <a className='summaryName'>Marta Correia</a>
        </div>
        <div className="section2">
          <div className="summarySummary">
            <a className='summaryTextTitle'>Hi! Welcome to my personal website!</a>
            <a className='summaryText'>I'm Marta Correia and I'm a Software Developer.
              I've always had a big passion for logical problems and arts, so I chose this field
              so I could get a good mix of the two.</a>
            <br/>
            <div className="summaryContacts">
              <div className='summaryContact'>
                <FontAwesomeIcon className='summaryContactIcon'icon={faLocationDot} />
                Lisbon, Portugal
              </div>
              <div className='summaryContact'>
                <FontAwesomeIcon className='summaryContactIcon'icon={faAt} />
                correiamarta2@gmail.com
              </div>
              <br/>
              <div className='summaryContact'>
                <FontAwesomeIcon className='summaryContactIcon'icon={faGithub} />
                <a href="https://github.com/martascorreia" target="_blank" className="nav-link">martascorreia</a>
              </div>
              <div className='summaryContact'>
                <FontAwesomeIcon className='summaryContactIcon'icon={faLinkedin} />
                <a href="https://www.linkedin.com/in/martascorreia/" target="_blank" className="nav-link">martascorreia</a>
              </div>

              <div className='summaryContact'>
                <FontAwesomeIcon className='summaryContactIcon'icon={faAddressCard} />
                <a href="https://drive.google.com/file/d/1wnVu27jTPx9_hwqPTBF4QZZ6IIvkgikx/view?usp=sharing" target="_blank" className="nav-link"> curriculum vitae</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Summary;
import React from 'react';
import "./Entry.css";
import "../../index.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatTimeDuration } from '../../resources/Utils';

const EntryIdentification = ({ logo, title, date, institution, type, startDate, endDate, hasSubEntries }) => {
  if (startDate) {
    var timeDays = (((endDate ? endDate : Date.now()) - startDate) / 1000) / (60 * 60 * 24);
    var timeYears = Math.floor(timeDays / 365);
    var timeMonths = Math.floor(timeDays % 365 / 30);
  }

  return (
    <div className="EntryIdentification">
      <div className="entryLogo">
        <img src={logo} alt="logo picture" className='entryLogoImg' />
      </div>
      <div className='entryMainTitle'>
        <a className="entryTitle">
          {hasSubEntries ? institution : title}
        </a>
        {!hasSubEntries &&
          <a className="entryInstitution">
            {institution}
          </a>}
        <a className="entryDate">{date} {startDate &&
          <a className="entryTime">
            {formatTimeDuration(timeYears, timeMonths)}
          </a>}
        </a>
        <a className="entryType">
          {type ? type : ''}
        </a>
      </div>
    </div>
  );
}

export default EntryIdentification;
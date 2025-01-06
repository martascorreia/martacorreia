import React from 'react';
import "./Entry.css";
import "../../index.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { formatTimeDuration } from '../../resources/Utils';

const SubEntry = ({ title, date, startDate, endDate }) => {
  if (startDate) {
    var timeDays = (((endDate ? endDate : Date.now()) - startDate) / 1000) / (60 * 60 * 24);
    var timeYears = Math.floor(timeDays / 365);
    var timeMonths = Math.floor(timeDays % 365 / 30);
  }

  return (
    <div className="SubEntry">
      <div className="entryMain">
        <FontAwesomeIcon className='subEntryArrowIcon' icon={faCaretRight} />
        <div className="entryMainTitle">
          <a className="subEntryTitle">
            {title}
          </a>
          <a className="entryDate">{date} {startDate &&
            <a className="entryTime">
               {formatTimeDuration(timeYears, timeMonths)}
            </a>}
          </a>
        </div>
      </div>
    </div>
  );
}

export default SubEntry;

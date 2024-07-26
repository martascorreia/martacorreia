import React from 'react';
import "./Entry.css";
import "../../index.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

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
              {"("}
              {timeYears != 0 &&
                timeYears + " yrs "}
              {timeMonths + " mos"}
              {")"}
            </a>}
          </a>
        </div>
      </div>
    </div>
  );
}

export default SubEntry;

import React from 'react';
import "./Entry.css";
import "../../index.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Entry = ({ identification, logo, title, date, type, description, institution, startDate, endDate, icons, subEntries }) => {

  return (
    <div className="Entry">
      <div className="entryMain">
        {identification}
      </div>
      <div className="subEntryMain">
        {subEntries}
      </div>
      {/*  < div id="icons">
        {icons && icons.map(icon =>
          <div>
            <FontAwesomeIcon icon={icon.logo} />
            <a>{icon.text}</a>
          </div>)*/}
      {false && description &&
        <div className="entryDescription" dangerouslySetInnerHTML={{ __html: description }} />
      }
    </div>
  );
}

export default Entry;

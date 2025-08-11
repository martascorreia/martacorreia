import React from 'react';
import "./Entry.css";
import "../../index.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Entry = ({ identification, description, icons, subEntries }) => {

  return (
    <div className="Entry">
      <div className="entryMain">
        {identification}
      </div>
      <div className="subEntryMain">
        {subEntries}
      </div>
      {description &&
        <div className="entryDescription">
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      }
       < div id="icons">
        {icons && icons.map(icon => {
          <div>
            <FontAwesomeIcon icon={icon.logo} />
            <a>{icon.text}</a>
          </div>})}
      </div>
    </div>


  );
}

export default Entry;

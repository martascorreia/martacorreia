import React from 'react';
import "../../../index.css"
import "./Education.css"
import "@fontsource/lexend-deca";
import Entry from "../../../components/Entry/Entry"
import EntryIdentification from "./../../../components/Entry/EntryIdentification"
import fculLogo from "./../../../resources/images/fcul.png"
import { faCertificate, faList } from "@fortawesome/free-solid-svg-icons";

function Education({ changeVisibility }) {
  return (
    <div className="Section" id="education">
      <div id="titleSection" onClick={() => changeVisibility("educationID")}>
        EDUCATION
      </div>
      <div id="section" className='educationID'>
        <Entry
          identification={
            <EntryIdentification
              title={"MSc Informatic Engineering"}
              date={'Set 2020 - Jul 2021 / Set 2022 - Mar 2024'}
              logo={fculLogo}
              institution={'Faculty of Sciences, University of Lisbon'}
              hasSubEntries={false} />}
          icons={[
            {
              logo: { faCertificate },
              link: {},
              text: "Certificate"
            },
            {
              logo: { faList },
              link: {},
              text: "Classes"
            }
          ]}
        />
      </div>
      <div id="section" className='educationID'>
        <Entry
          identification={
            <EntryIdentification
              title={"BSc Informatic Engineering"}
              date={'Set 2017 - Jul 2020'}
              logo={fculLogo}
              institution={'Faculty of Sciences, University of Lisbon'}
              hasSubEntries={false} />}
        />
      </div>
    </div>
  );
}
export default Education;
import React from 'react';
import "../../../index.css"
import "./Experience.css"
import "@fontsource/lexend-deca";
import Entry from "../../../components/Entry/Entry"
import SubEntry from "../../../components/Entry/SubEntry"
import EntryIdentification from "./../../../components/Entry/EntryIdentification"
import lasigeLogo from "./../../../resources/images/lasige.png"
import accentureLogo from "./../../../resources/images/accenture.png"
import vfxLogo from "./../../../resources/images/vfx.png"
import aecsLogo from "./../../../resources/images/ingles.png"

function Experience({ changeVisibility }) {
  return (
    <div className="Section" id="experience">
      <div id="titleSection" onClick={() => changeVisibility("experienceID")}>
        EXPERIENCE
      </div>
      <div id="section" className='experienceID'>
        <Entry
          identification={
            <EntryIdentification
              logo={accentureLogo}
              date={'Nov 2021 - Present'}
              institution={'Accenture Portugal'}
              startDate={new Date("2021-11-05")}
              hasSubEntries={true}
              type={'Full-Time'} />}
          subEntries={[
            <SubEntry
              date={'Feb 2023 - Present'}
              title={"System Developer Analyst"}
              startDate={new Date("2023-02-01")}
            />,
            <SubEntry
              date={'Nov 2021 - Jan 2023'}
              title={"Application Development Associate"}
              startDate={new Date("2021-11-05")}
              endDate={new Date("2023-01-31")}
            />]}
          description={"<ul><li>Web Development with <b>MERN</b> stack, as a Full-Stack developer - 8 months</li>" +
            "<li>Development of a computer vision algorithm using <b>Java</b>, <b>Python</b> and the ORB algorithm from OpenCV - 8 months</li>" +
            "<li>Web Development with <b>Java</b>, <b>Javascript</b>, <b>Maven</b>, <b>Primefaces</b> and <b>Oracle SQL</b> - 13 months</li></ul>" +
            "In all projects, I worked with Azure DevOps. Methodologies were Agile and Waterfall."} />
      </div>
      <div id="section" className='experienceID'>
        <Entry
          identification={
            <EntryIdentification
              title={"Student Reasearcher"}
              date={'Set 2022 - Present'}
              logo={lasigeLogo}
              institution={'LASIGE'}
              startDate={new Date("2022-09-15")}
              hasSubEntries={false}
              type={'Full-Time'} />}
        />
      </div>
      <div id="section" className='experienceID'>
        <Entry
          identification={
            <EntryIdentification
              title={"English Teacher"}
              date={'Set 2021 - Oct 2021'}
              logo={aecsLogo}
              institution={'APS de Castanheira do Ribatejo '}
              startDate={new Date("2021-09-15")}
              endDate={new Date("2021-10-15")}
              hasSubEntries={false}
              type={'Part-Time'} />}
        />
      </div>
      <div id="section" className='experienceID'>
        <Entry
          identification={
            <EntryIdentification
              title={"Youth Ocupation Programme"}
              date={'Jul 2018'}
              logo={vfxLogo}
              institution={'Junta de Freguesia de Vila Franca de Xira'}
              startDate={new Date("2018-07-01")}
              endDate={new Date("2018-07-31")}
              hasSubEntries={false}
              type={'Part-Time'} />}
          description={'Helped mantaining the camping park, worked on booking the checkins and checkouts, produced flyers, and helped communicating with foreign clients.'}
        />
      </div>
    </div>
  );
}
export default Experience;
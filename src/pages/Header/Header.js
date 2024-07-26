import React from 'react';
import "../../index.css"
import "./Header.css"
import "@fontsource/lexend-deca";
import { Link } from 'react-router-dom';
import TextButton from "../../components/TextButton/TextButton"

function Header() {
  return (
    <div className="Header" id="header">
      <Link to={'/'} className="nav-link"><TextButton className="headerBtns" text="About Me" elementId={"aboutMe"}/></Link>
      <Link to={'/'} className="nav-link"><TextButton className="headerBtns" text="Experience" elementId={"experience"}/></Link>
      <Link to={'/'} className="nav-link"><TextButton className="headerBtns" text="Education" elementId={"education"}/></Link>
      <Link to={'/'} className="nav-link"><TextButton className="headerBtns" text="Projects" /></Link>
    </div>
  );
}
export default Header;
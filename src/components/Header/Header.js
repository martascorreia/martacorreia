import React from 'react';
import "../../index.css"
import "./Header.css"
import "@fontsource/lexend-deca";
import { Link } from 'react-router-dom';
import TextButton from "../TextButton/TextButton"

function Header() {
  return (
    <div className="Header" id="header">
      <a href="#summary" className="nav-link"><TextButton className="headerBtns" text="About Me" /></a>
      <Link to={'/'} className="nav-link"><TextButton className="headerBtns" text="Education" /></Link>
      <Link to={'/'} className="nav-link"><TextButton className="headerBtns" text="Experience" /></Link>
      <Link to={'/'} className="nav-link"><TextButton className="headerBtns" text="Projects" /></Link>
    </div>
  );
}
export default Header;
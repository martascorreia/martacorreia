import React from 'react';
import "../../index.css"
import "./Home.css"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Main from "../Main/Main"
import "@fontsource/lexend-deca";

function Home() {
    return (
    <div className="Home" id="home">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}
export default Home;
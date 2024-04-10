import React from 'react';
import "./index.css"
import "./Home.css"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Main from "./components/Main/Main"
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
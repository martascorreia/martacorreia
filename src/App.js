import React from 'react';
import './App.css';
import Home from "./pages/Home/Home"
import { HashRouter , Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App" id="app">
      <HashRouter >
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </HashRouter >
    </div >
  );
}
export default App;
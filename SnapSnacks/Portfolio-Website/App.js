//import logo from './logo.svg';
//import React from "react";
//import './index.css';
import Navbar from "./components/NavBar/navbar";
import Intro from "./components/intro/intro";
import Skills from "./components/Skills/Skills";
import Works from "./components/Works/Works";
import Client from "./components/Client/client";
import Footer from "./components/Footer/footer";
function App() {
  return (
    
    <div className="app">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Works/>
      <Client/>
      <Footer/>
    </div>
  ); 
}

export default App;

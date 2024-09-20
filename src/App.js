import React from "react";
import Nav from "./components/Nav";
import { BrowserRouter as Router , Route, Routes, Link } from 'react-router-dom';
import About from "./components/About";
import Accueil from "./components/Accueil";
import Produit from "./components/Produit";
import './App.css';

import Footer from "./Footer";

function App() {
  return (
   <>
    <Router>
    <Nav/>
      <div id="div1">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/about" element={<About />} />
          <Route path="/produit" element={<Produit />} />
        </Routes>
      </div>
      
    </Router>
 
   </>
   
  );
}

export default App;

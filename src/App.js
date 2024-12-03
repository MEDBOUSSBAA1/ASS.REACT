import React from "react";
import Nav from "./components/Nav";
import { BrowserRouter as Router , Route, Routes, Link } from 'react-router-dom';
import About from "./components/About";
import Accueil from "./components/Accueil";
import Produit from "./components/Produit";
import './App.css';
import Carts from "./components/Carts";
import Footer from "./components/Footer"
import data from './data.json';
import Admin from "./layout/admin";
import Guest from "./layout/guest";
import Ajouter_pro from "./components-admin/ajouter_pro";
import { Toaster } from "sonner";



function App() {
  return (
   <>
    <Router>
    
      <div id="div1">
        <Routes>
          <Route exact path="/" element={<Guest>
            <Accueil />
          </Guest>} />
          <Route path="/about" element={<Guest>
            <About/>
          </Guest>} />
          <Route path="/produit" element={<Guest>
            <Produit />
          </Guest>} />
          <Route path="/admin" element={
            <Admin>
            dashboard
            </Admin>
          } />
          <Route path="/addpr" element={<Admin>
            <Ajouter_pro/>
          </Admin>}/>


        </Routes>
      </div>
      {/* <Carts/> */}
      
    </Router>
    
   
    <Toaster richColors/>
   </>
   
  );
}

export default App;

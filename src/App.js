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
import Modifier_produit from "./components-admin/modifier_produit";
import List_produit from "./components-admin/list_produit";
import Panier from "./components/Panier";
import Contact from "./components/Contact";
import Register from "./authentification/Register";
import Login from "./authentification/Login";




function App() {
  return (
   <>
    <Router>
    
      <div id="div1">
        <Routes>
        <Route  exact path="/panier" element={<Guest>
          <Panier/>
          </Guest>} />

          <Route exact path="/" element={<Guest>
            <Accueil />
            <Carts/>
          </Guest>} />
          <Route path="/about" element={<Guest>
            <About/>
          </Guest>} />
          <Route path="/produit" element={<Guest>
            <Carts/>
          </Guest>} />

          <Route exact path="/contact" element={<Guest>
            <Contact/>
            
          </Guest>} />

          <Route path="/admin" element={
            <Admin>
            dashboard
            </Admin>
          } />
          <Route path="/addpr" element={<Admin>
            <Ajouter_pro/>
          </Admin>}/>

          <Route path="/modfier" element={<Admin>
            <Modifier_produit/>
          </Admin>}/>

          <Route path="/lisp" element={<Admin>
            <List_produit/>
          </Admin>}/>
          <Route path="/modifier/:id" element={<Admin>
            <Modifier_produit/>
          </Admin>}/>

          <Route exact path="/register" element={<Guest>
            <Register/>
            
          </Guest>} />

          <Route exact path="/login" element={<Guest>
            <Login/>
          </Guest>} />


        </Routes>
      </div>
      
      
      <Footer/>
    </Router>
    
   
    <Toaster richColors/>
   </>
   
  );
}

export default App;

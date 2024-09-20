import React from 'react'
import { Link } from "react-router-dom";
import './Nav.css'

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div  >
      <ul  className="navbar-nav ">
            <li className="nav-item active mx-auto p-2"><Link to="/">Acceill</Link></li>
            <li className="nav-item active mx-auto p-2"><Link to="/about">About</Link></li>
            <li className="nav-item active mx-auto p-2"><Link to="/produit">Produit</Link></li>
        </ul>
      </div>
    </nav>
  )
}

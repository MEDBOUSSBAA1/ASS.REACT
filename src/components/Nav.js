import React from 'react'
import { Link } from "react-router-dom";
import './Nav.css'

export default function Nav() {
  return (
    <div >
        <ul >
            <li><Link to="/">Acceill</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/produit">Produit</Link></li>
        </ul>
    </div>
  )
}

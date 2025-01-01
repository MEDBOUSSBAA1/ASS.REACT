
import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

export default function Nav ()  {
  return (
    <nav className="bg-blue-900 shadow-lg">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <Link to="/">MonLogo</Link>
        </div>
        

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-white font-medium">
        <li className="text-white  list-none mr-5" >
          <Link to={"/panier"}><FiShoppingCart/></Link>
        
        </li>
          <li>
            <Link
              to="/home"
              className="hover:text-blue-400 transition duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/About"
              className="hover:text-blue-400 transition duration-200"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/produit"
              className="hover:text-blue-400 transition duration-200"
            >
              Produits
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-blue-400 transition duration-200"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};


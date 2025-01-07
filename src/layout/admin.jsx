import React from "react";
import { Link } from "react-router-dom";

const Dashboard = ({ children }) => {
  return (
    <div className="flex justify-between items-start p-6 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 shadow-lg rounded-lg">
      {/* Menu d'actions */}
      <div className="flex flex-col space-y-6 w-1/4 bg-white p-4 rounded-lg shadow-md border border-gray-300">
        <h2 className="text-lg font-bold text-gray-700">Actions</h2>
        <Link
          to="/addpr"
          className="text-sm font-medium text-blue-700 hover:text-white hover:bg-blue-600 px-4 py-2 rounded-lg transition duration-300 ease-in-out"
        >
          Ajouter un produit
        </Link>
        <Link
          to="/lisp"
          className="text-sm font-medium text-yellow-600 hover:text-white hover:bg-yellow-500 px-4 py-2 rounded-lg transition duration-300 ease-in-out"
        >
          list des produit
        </Link>
        
      </div>

      {/* Contenu principal */}
      <div className="flex-grow ml-6 bg-white p-6 rounded-lg shadow-md border border-gray-300">
        {children ? (
          children
        ) : (
          <p className="text-gray-600 animate-pulse">
            Sélectionnez une action dans le menu pour commencer.
          </p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

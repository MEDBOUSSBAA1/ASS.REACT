import React from 'react'
import { useState,useEffect } from 'react';
import Modifier_produit from './modifier_produit';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'sonner';

export default function List_produit() {
  const [produits, setProduit] = useState([]);

  const deletehand=async(id)=>{
    try{
        const response=await axios.delete(`http://localhost:8000/api/produit/delete/${id}`)
        setProduit(response.data.produits)
        toast.success("le produit a été supprimer")
    }catch(error){
      toast.error("error dans le serveur")
    }
  }

    const getpr=async()=>{
        try{
            const response=await fetch('http://localhost:8000/api/produits',{
                method:"GET",
            })
            const data=await response.json();
            setProduit(data);
        }catch(error){
             console.error('ereur de afficher les produit',error)   
        }
    }
    useEffect(() => {
        getpr();
      }, []);
  return (
    <div className="max-w-7xl mx-auto p-4">
  <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
    Products
  </h1>
   
  {produits.length > 0 ? (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100 border-b">
          <th className="text-left px-4 py-2 text-gray-800 font-semibold">
              image
            </th>
            <th className="text-left px-4 py-2 text-gray-800 font-semibold">
              Product Name
            </th>
            <th className="text-left px-4 py-2 text-gray-800 font-semibold">
              Price
            </th>
            <th className="text-left px-4 py-2 text-gray-800 font-semibold">
              Description
            </th>
            <th className="text-left px-4 py-2 text-gray-800 font-semibold">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {produits.map((product, index) => (
            <tr
              key={product.id}
              className={`border-b ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
            >
              <td className="px-4 py-2 text-gray-700">
              <img
        src={`http://localhost:8000/storage/produits/${product.image_path}`}
        alt={product.nom}
        className="w-full h-48 object-cover"
      />
              </td>
              <td className="px-4 py-2 text-gray-700">{product.nom}</td>
              <td className="px-4 py-2 text-gray-700">{product.prix}Mad</td>
              <td className="px-4 py-2 text-gray-700">{product.description}</td>
              <td className="px-4 py-2">
                {/* Replace below buttons with your desired actions */}
                <Link to={`/modifier/${product.id}`}className="text-blue-500 hover:underline mr-2"
                >
                  Modifier
                </Link>
                <button className="text-red-500 hover:underline "  onClick={e=>deletehand(product.id)}>
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <p className="text-center text-gray-600">No products found.</p>
  )}
</div>

  )
}

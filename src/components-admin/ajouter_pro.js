import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";

export default function Ajouter_pro() {
    const[Nom,setNom]=useState()
    const[Prix,setPrix]=useState()
    const[Description,setDescription]=useState()
    const[image,setimage]=useState()

    const handleSubmit = async (e) => {
      e.preventDefault();
  
      const form = new FormData();
      form.append("nom", Nom);
      form.append("description", Description);
      form.append("prix", Prix);
      
      if (image) {
        form.append("image",image);
      }
      try{
        const response=await axios.post('http://127.0.0.1:8000/api/produit/store',form,{
          Headers:{
            "Content-Type": "multipart/form-data",
          }
        });
        toast.success("Produit ajouté avec succès !");
      
      }catch (error) {
        console.error("Erreur lors de l'ajout du produit :", error);
        toast.error("Erreur lors de l'ajout du produit !");
      }
    }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto space-y-4"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Ajouter un produit</h2>

      {/* Nom du produit */}
      <div>
        <label htmlFor="productName" className="block text-sm font-medium text-gray-700">
          Nom du produit
        </label>
        <input
          
          onChange={(e)=>setNom(e.target.value)}
        //   onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      {/* Description */}
      <div>
        <label  className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
         
          onChange={(e)=>setDescription(e.target.value)}
        //   onChange={handleChange}
          required
         cols={50}
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >

        </textarea>
      </div>

      {/* Prix */}
      <div>
        <label htmlFor="price" className="block text-sm font-medium text-gray-700">
          Prix (en MAD)
        </label>
        <input
          type="number"
          onChange={(e)=>setPrix(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      {/* Catégorie */}
      

      {/* Image */}
      <div>
        <label htmlFor="image" className="block text-sm font-medium text-gray-700">
          Image du produit
        </label>
        <input
          type="file"
          id="image"
          name="image"
          onChange={(e)=>setimage(e.target.files[0])}
          required
          className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
      </div>

      {/* Bouton de soumission */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow hover:bg-blue-700 transition duration-300"
      >
        Ajouter le produit
      </button>
    </form>
  );
};



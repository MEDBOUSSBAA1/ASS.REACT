import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'sonner'
import { useParams } from 'react-router-dom'

export default function Modifier_produit() {
    const[Nom,setNom]=useState("")
    const[Prix,setPrix]=useState("")
    const[Description,setDescription]=useState("")
    const[image,setimage]=useState()
    const{id}=useParams()
   console.log(id)

    useEffect(()=>{
        const fetchdata= async ()=>{
            try{
                const response = await axios.get(`http://localhost:8000/api/produit/${id}`)
                const produit= response.data
                setNom(produit.nom)
                setDescription(produit.description)
                setPrix(produit.prix)

                
            }catch{
                console.error('error de affichier les produit')
                toast.error('error de affichier les produit')
            }
        }
        fetchdata()
    },[])

    

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const form= new FormData();
        form.append('nom',Nom)
        form.append('prix',Prix)
        form.append('description',Description)
        if(image){
            form.append('image',image)
        }
        try{
            form.append('prix',Prix)
                const response= await axios.post(`http://localhost:8000/api/produit/update/${id}`,form,
                   {
                    Headers:{
                        "content-type":"multipart/form-data"
                      },
                   }
                );

            }catch(error){
                console.error("error a ajouter le produit")
                toast.error("error a ajouter le produit")
            }
        
    }
  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow">
    <h2 className="text-xl font-bold">Modifier le produit</h2>

    {/* Champ Nom */}
    <div>
      <label htmlFor="nom" className="block text-sm font-medium text-gray-700">
        Nom du produit
      </label>
      <input
        type="text"
        id="nom"
        name="nom"
        value={Nom}
        onChange={(e)=>setNom(e.target.value)}
        required
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
      />
    </div>

    {/* Champ Description */}
    <div>
      <label htmlFor="description" className="block text-sm font-medium text-gray-700">
        Description
      </label>
      <textarea
        id="description"
        name="description"

        onChange={(e)=>setDescription(e.target.value)}
        required
        value={Description}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
      ></textarea>
    </div>

    {/* Champ Prix */}
    <div>
      <label htmlFor="prix" className="block text-sm font-medium text-gray-700">
        Prix
      </label>
      <input
        type="number"
        id="prix"
        name="prix"
        value={Prix}
        onChange={(e)=>setPrix(e.target.value)}
        required
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
      />
    </div>

    {/* Champ Image */}
    <div>
      <label htmlFor="image" className="block text-sm font-medium text-gray-700">
        Image du produit
      </label>
      {/* (
        <div className="mb-2">
          <p>Image actuelle :</p>
          <img src={`http://127.0.0.1:8000/storage/produits`} alt="Produit" className="w-32 h-32 object-cover" />
        </div>
      ) */}
      <input
        type="file"
        id="image"
        name="image"
        onChange={(e)=>setimage(e.target.files[0])}
        className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
      />
    </div>

    {/* Bouton Soumettre */}
    <button
      type="submit"
      className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow hover:bg-blue-700 transition duration-300"
    >
      Modifier le produit
    </button>
  </form>
);
}
    


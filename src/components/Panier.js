import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie';
import axios from 'axios';
export default function Panier() {
  const[products,setproducts]=useState(Cookies.get('product')??[])
  const[ids,setids]=useState(products ? JSON.parse(products).map(item=>item.id) : [])
  const[prolist,setprolist]=useState([])

  const inc=(id)=>{
    let products = Cookies.get('product');
        products = products ? JSON.parse(products) : [];
      
        // Check if the product already exists
        const productIndex =products.findIndex(product => product.id === id);
        if (productIndex !== -1) {
          // Update the quantity if product already exists
          products[productIndex].quantity += 1;
        }
        Cookies.set('product', JSON.stringify(products), { expires: 7 });
      
  }
  const dec=(id)=>{
    let products=Cookies.get('product')
    products=products? JSON.parse(products) :[]
    const productIndex=products.findIndex(product=>product.id===id)
    if(productIndex!==-1){
      products[productIndex].quantity -=1
    }
    Cookies.set('product',JSON.stringify(products),{ expires: 7 })
  }
  
  const suprimerpanier=(id)=>{
    const prd=Cookies.get('product')
    const newcookies=JSON.parse(prd).filter(item=>item.id!=id)
    Cookies.set('product', JSON.stringify(newcookies), { expires: 7 });
  }

  const getpr=async()=>{
    try{
      const response=await axios.post("http://localhost:8000/api/produits/get",{ids})
      setprolist(response.data.produits)
    }catch{}
  }
useEffect(()=>{
  getpr()
},[])

  return (
    <div className="w-full">
      <table className="w-full table">
        <tr>
          <th>id</th>
          <th>Nom</th>
          <th>description</th>
          <th>prix</th>
          <th>quantite</th>
          <th>total</th>
          <th>spprimer</th>

        </tr>
        {
          prolist&&
          prolist.map(pr=>{
            return(
              <tr>
          <td>{pr.id}</td>
          <td>{pr.nom}</td>
          <td>{pr.description}</td>
          <td>{pr.prix}</td>
          <td>
            <div>
              <button onClick={(e)=>dec(pr.id)}>{'-'}</button>
              <span>{JSON.parse(products).find(item=>item.id==pr.id).quantity}</span>
              <button onClick={(e)=>inc(pr.id)}>{'+'}</button>
            </div>
          </td>
          <td>{pr.prix*JSON.parse(products).find(item=>item.id==pr.id).quantity} MAD</td>
          <td><button onClick={(e)=>{suprimerpanier(pr.id)}}>supprimer</button></td>

          
        </tr>
            )
          })
        }
      </table>
    </div>
  )
}

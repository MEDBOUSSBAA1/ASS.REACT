import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie';
import axios from 'axios';
export default function Panier() {
  const[products,setproducts]=useState(Cookies.get('product')??[])
  const[ids,setids]=useState(products ? JSON.parse(products).map(item=>item.id) : [])
  const[prolist,setprolist]=useState([])
  

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
    <div>
      <table>
        <tr>
          <th>id</th>
          <th>Nom</th>
          <th>description</th>
          <th>prix</th>
          <th>total</th>
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
          <td></td>
        </tr>
            )
          })
        }
      </table>
    </div>
  )
}

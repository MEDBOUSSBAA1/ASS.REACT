import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';

export default function Panier() {
  const [products, setProducts] = useState(Cookies.get('product') ? JSON.parse(Cookies.get('product')) : []);
  const [prolist, setProlist] = useState([]);

  const updateQuantity = (id, delta) => {
    // Mise à jour de la quantité localement
    const updatedProducts = products.map((product) =>
      product.id === id ? { ...product, quantity: Math.max(0, product.quantity + delta) } : product
    );
    setProducts(updatedProducts);
    // Mettre à jour les cookies
    Cookies.set('product', JSON.stringify(updatedProducts), { expires: 7 });
  };

  const deleteProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
    Cookies.set('product', JSON.stringify(updatedProducts), { expires: 7 });
  };

  const getProducts = async () => {
    try {
      const ids = products.map((item) => item.id);
      const response = await axios.post("http://localhost:8000/api/produits/get", { ids });
      setProlist(response.data.produits);
    } catch (error) {
      console.error("Erreur lors de la récupération des produits :", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="w-full">
      <table className="w-full table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Description</th>
            <th>Prix</th>
            <th>Quantité</th>
            <th>Total</th>
            <th>Supprimer</th>
          </tr>
        </thead>
        <tbody>
          {prolist.map((pr) => {
            const product = products.find((item) => item.id === pr.id);
            return (
              <tr key={pr.id}>
                <td>{pr.id}</td>
                <td>{pr.nom}</td>
                <td>{pr.description}</td>
                <td>{pr.prix}</td>
                <td>
                <div>
                    <button onClick={() => updateQuantity(pr.id, -1)}>-</button>
                    <span className="px-3 py-1 text-black rounded-full font-semibold text-sm shadow-md">
                         {product?.quantity || 0}
                    </span>

                    <button onClick={() => updateQuantity(pr.id, 1)}>+</button>
                  </div>
                </td>
                <td>{pr.prix * (product?.quantity || 0)} MAD</td>
                <td>
                  <button onClick={() => deleteProduct(pr.id)}>Supprimer</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

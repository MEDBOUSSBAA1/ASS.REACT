import React, { useEffect, useState } from "react";

export default function Carts() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  // Fetch products from API
  const getProducts = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/produits", {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      console.error("Error fetching products:", err);
      setError("Failed to load products. Please try again later.");
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  // Render a single product card
  const renderProductCard = (product) => (
    <div
      className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
      key={product.id}
    >
      <img
        src={`http://localhost:8000/storage/produits/${product.image_path}`}
        alt={product.nom}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 text-center">
        <h2 className="text-xl font-semibold text-gray-700">{product.nom}</h2>
        <p className="text-gray-600 mt-2">{product.description}</p>
        <p className="text-xl font-bold text-gray-800 mt-4">{product.prix} DH</p>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
          Ajouter au panier
        </button>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Products
      </h1>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.length > 0 ? (
          products.map((product) => renderProductCard(product))
        ) : (
          <p className="text-center text-gray-600">No products found.</p>
        )}
      </div>
    </div>
  );
}

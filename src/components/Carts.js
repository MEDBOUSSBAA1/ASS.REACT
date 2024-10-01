import React from 'react';

export default function Carts() {
  const produits = [
    {
      "id": 1,
      "image": "./src/components/images/safran-ss_Plan-de-travail-1.jpg",
      "nom": "الزعفران الحر",
      "poid": "5g",
      "prix": "200 Dh"
    },
    {
      "id": 2,  // L'id du second produit doit être différent
      "image": "./src/components/images/safran-ss_Plan-de-travail-1.jpg",
      "nom": "الزعفران الحر",
      "poid": "3g",
      "prix": "120 Dh"
    }
  ];

  return (
    <>
      <h1>Liste des produits</h1>
      <div>
        {produits.map((pr) => {
          return (
            <div key={pr.id}>
              <p>{pr.nom}</p>
              <p>{pr.poid}</p>
              <p>{pr.image}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

import React from 'react';
import imgPath from './images/safran-ss_Plan-de-travail-1.jpg'; // Import de l'image

const produit = {
  id: 1,
  nom: "z1",
  designation: "aaaa",
  img: imgPath
};

export default function Accueil() {
  return (
    <>
      <h1>COOPERATIVE AGRICOLE ASSOUSIEL</h1>
      <ul>
        <li>{produit.nom}</li>
        <li>{produit.designation}</li>
        <li>
          <img src={produit.img} alt={produit.nom} width="200" />
        </li>
      </ul>
    </>
  );
}

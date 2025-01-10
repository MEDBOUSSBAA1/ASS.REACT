import React from 'react';
import axios from 'axios';

const Logout = () => {
  const handleLogout = async () => {
    try {
      await axios.post(
        'http://localhost:8000/api/logout', // URL de l'API
        {},
        { withCredentials: true } // Nécessaire pour Sanctum
      );
      localStorage.removeItem('token');
      alert('Déconnexion réussie !');
    } catch (err) {
      console.error(err);
      alert('Échec de la déconnexion !');
    }
  };

  return <button onClick={handleLogout}>Se déconnecter</button>;
};

export default Logout;


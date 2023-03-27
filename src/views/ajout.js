import React from 'react';
import { Link } from 'react-router-dom';

const ajout = () => {
  return (
    <div>
      <h1>Détails des utilisateurs</h1>
      <p>Ceci est un détail</p>
      <Link to="/utilisateurs/editer/:user_id"> Gestion des utilisiateurs</Link>
      <Link to="/">Liste des utilisateurs</Link>
    </div>
  );
};

export default ajout;

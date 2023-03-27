import React from 'react';
import { Link } from 'react-router-dom';

const ajout = () => {
  return (
    <div>
      <h1>Ajout des blagues</h1>
      <p>Ceci est un ajout</p>
      <Link to="/joke/:id"> Modification d'une blague</Link>
      <Link to="/">Liste des blagues</Link>
    </div>
  );
};

export default ajout;

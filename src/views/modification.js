import React from 'react';
import { Link } from 'react-router-dom';

const modification = () => {
  return (
    <div>
      <h1>Modification d'une blague</h1>
      <p>Ceci est une modification</p>
      <Link to="/joke/nouvelle"> Ajout d'une blague</Link>
      <Link to="/">Liste des blagues</Link>
    </div>
  );
};

export default modification;

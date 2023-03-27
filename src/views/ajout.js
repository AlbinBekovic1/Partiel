import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ajout.scss';

const ajout = () => {
  return (
    <div>
      <h1>Ajout des blagues</h1>
      <p>Ici il se fera un ajout !</p>

      <div class="bloc">
        <div class="modif">
          <Link to="/joke/:id"> Modification d'une blague</Link>
        </div>
        <div class="liste">
          <Link to="/">Liste des blagues</Link>
        </div>
      </div>
    </div>
  );
};

export default ajout;

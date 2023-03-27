import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import '../styles/modification.scss';

const modification = () => {
  return (
    <div>
      <h1>Modification d'une blague</h1>
      <p>Ceci est une modification</p>

      <div class="bloc">
        <div class="ajout">
          <Link to="/joke/nouvelle"> Ajout d'une blague</Link>
        </div>
        <div class="liste">
          <Link to="/">Liste des blagues</Link>
        </div>
      </div>
    </div>
  );
};

export default modification;

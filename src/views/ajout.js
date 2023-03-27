import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ajout.scss';

const ajout = () => {
  const navigate = useNavigate();
  const [newJoke, setNewJoke] = useState({ setup: '', delivery: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewJoke({ ...newJoke, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedJokes = JSON.parse(localStorage.getItem('jokes'));
    const jokeToAdd = {
      ...newJoke,
      id: Date.now(), // Créez un ID basé sur le timestamp actuel
      type: 'twopart',
    };

    storedJokes.push(jokeToAdd);
    localStorage.setItem('jokes', JSON.stringify(storedJokes));
    navigate('/');
  };

  return (
    <div className="add-joke">
      <h1>Ajouter une blague</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div htmlFor="setup">Question :</div>
          <textarea
            id="setup"
            name="setup"
            value={newJoke.setup}
            onChange={handleChange}
            className="form-control"
            rows="3"
          ></textarea>

          <div htmlFor="delivery">Réponse :</div>
          <textarea
            id="delivery"
            name="delivery"
            value={newJoke.delivery}
            onChange={handleChange}
            className="form-control"
            rows="3"
          ></textarea>
        </div>
        <button type="submit" className="submit-button">
          Ajouter la blague
        </button>
      </form>
    </div>
  );
};

export default ajout;

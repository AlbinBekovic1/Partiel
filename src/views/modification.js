import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import '../styles/modification.scss';

const modification = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [joke, setJoke] = useState(null);

  useEffect(() => {
    const storedJokes = JSON.parse(localStorage.getItem('jokes'));
    const jokeToEdit = storedJokes.find((j) => j.id === parseInt(id));
    setJoke(jokeToEdit);
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJoke({ ...joke, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedJokes = JSON.parse(localStorage.getItem('jokes')).map((j) => {
      if (j.id === parseInt(id)) {
        return joke;
      }
      return j;
    });

    localStorage.setItem('jokes', JSON.stringify(updatedJokes));
    navigate('/');
  };

  if (!joke) {
    return <div>Loading...</div>;
  }

  return (
    <div className="edit-joke">
      <h1>Modifier la blague</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          {joke.type === 'twopart' ? (
            <>
              <label htmlFor="setup">Setup :</label>
              <textarea
                id="setup"
                name="setup"
                value={joke.setup}
                onChange={handleChange}
                className="form-control"
                rows="3"
              ></textarea>

              <label htmlFor="delivery">Delivery :</label>
              <textarea
                id="delivery"
                name="delivery"
                value={joke.delivery}
                onChange={handleChange}
                className="form-control"
                rows="3"
              ></textarea>
            </>
          ) : (
            <>
              <label htmlFor="joke">Joke :</label>
              <textarea
                id="joke"
                name="joke"
                value={joke.joke}
                onChange={handleChange}
                className="form-control"
                rows="3"
              ></textarea>
            </>
          )}
        </div>
        <button type="submit" className="submit-button">
          Enregistrer les modifications
        </button>
      </form>
    </div>
  );
};

export default modification;

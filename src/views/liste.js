import React, { useEffect, useState } from 'react';
import '../styles/liste.scss';

const liste = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    const fetchJokes = async () => {
      const storedJokes = localStorage.getItem('jokes');
      if (storedJokes) {
        setJokes(JSON.parse(storedJokes));
      } else {
        const response = await fetch(
          'https://v2.jokeapi.dev/joke/Any?lang=fr&amount=10'
        );
        const data = await response.json();
        if (data && data.jokes) {
          setJokes(data.jokes);
          localStorage.setItem('jokes', JSON.stringify(data.jokes));
        }
      }
    };

    fetchJokes();
  }, []);

  return (
    <div className="jokes-list">
      <h1>Liste des blagues</h1>
      {jokes.map((joke, index) => (
        <div key={index} className="joke-card">
          {joke.type === 'twopart' ? (
            <>
              <p>{joke.setup}</p>
              <p>{joke.delivery}</p>
            </>
          ) : (
            <p>{joke.joke}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default liste;

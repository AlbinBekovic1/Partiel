import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/liste.scss';
import React, { useEffect, useState } from 'react';
import React, { NavLink } from 'react-router-dom';

const liste = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (!users.length) {
      fetch('https://randomuser.me/api/?results=10')
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
          setUsers(data.results);
          localStorage.setItem('liste', JSON.stringify(data.results));
        });
    }
  }, [users]);

  return (
    <nav className="users">
      <h1>Liste des utilisateurs</h1>
      <div className="grid">
        {users.map((e) => (
          <div className="user">
            <img src={e.picture.thumbnail} /> <br />
            <span>
              {e.name.title} {e.name.first} {e.name.last}
            </span>
            <br />
            <span>Nationalité : {e.nat}</span> <br />
            <NavLink to={e.email}>{e.email}</NavLink> <br />
          </div>
        ))}
      </div>
    </nav>
  );
};

export default liste;

import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navigation.scss';

const navigation = () => {
  return (
    <div class="header">
      <nav class="nav">
        <NavLink to="/joke/nouvelle"> Ajout </NavLink>
        <br />
        <NavLink to="/joke/:id"> Modification </NavLink>
        <br />
        <NavLink to="/"> Liste </NavLink>
      </nav>
    </div>
  );
};

export default navigation;

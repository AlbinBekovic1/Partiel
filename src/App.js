import React from 'react';
import './style.css';
import Ajout from './views/ajout.js';
import Modification from './views/modification.js';
import Liste from './views/liste.js';
import Navigation from './components/Navigation.js';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/joke/nouvelle" element={<Ajout />} />
        <Route path="/" element={<Liste />} />
        <Route path="/joke/:id" element={<Modification />} />
      </Routes>
    </div>
  );
}

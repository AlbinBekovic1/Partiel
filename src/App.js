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
        <Route path="/utilisateur/editer/:user_id" element={<Ajout />} />
        <Route path="/" element={<Liste />} />
        <Route path="/utilisateurs/:user_id" element={<Modification />} />
      </Routes>
    </div>
  );
}

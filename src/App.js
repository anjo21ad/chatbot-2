// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './views/Home';
import Overenskomst from './views/Overenskomst';
import Transaktionskoder from './views/Transaktionskoder';
import Videnbase from './views/Videnbase';
import './styles/App.css';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/overenskomst-for-lærere" element={<Overenskomst />} />
          <Route path="/transaktionskoder" element={<Transaktionskoder />} />
          <Route path="/videnbase" element={<Videnbase />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;

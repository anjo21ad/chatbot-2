import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './views/Home';
import CreateProject from './views/Overenskomst';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/overenskomst-for-lærere" element={<CreateProject />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import CreateProject from './views/CreateProject';
import Experience from './views/Experience';
import Skills from './views/Skills';
import CandidateProfile from './views/CandidateProfile';
import AssignmentDescription from './views/AssignmentDescription';
import AssignmentCreated from './views/AssignmentCreated';
import CvList from './views/CvList';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<CreateProject />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/candidate-profile" element={<CandidateProfile />} />
            <Route path="/assignment-description" element={<AssignmentDescription />} />
            <Route path="/assignment-created" element={<AssignmentCreated />} />
            <Route path="/cv-list" element={<CvList/>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

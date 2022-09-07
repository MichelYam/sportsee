// import './App.css';
import React from 'react';
// Components
import { DashBoard } from './pages/DashBoard/DashBoard';
import Home from './pages/Home/index';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard/:userId' element={<DashBoard />} />
          <Route path='*' element={<Navigate to={`/`} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

import './App.css';
import DashBoard from './pages/DashBoard/DashBoard';

import React from 'react';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/index';

function App() {

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
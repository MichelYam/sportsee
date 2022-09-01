import React from 'react';

import './App.css';
import DashBoard from './pages/DashBoard/DashBoard';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/dashboard/:id' element={<DashBoard />} />
        <Route path='/dashboard' element={<DashBoard />} />
        <Route path='*' element={<Navigate to={`/dashboard/12`} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
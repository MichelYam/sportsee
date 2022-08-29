
import './App.css';
import DashBoard from './pages/DashBoard/DashBoard';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/dashboard/:userId' element={<DashBoard />} />
          <Route index path='/dashboard' element={<DashBoard />} />
          <Route path='*' element={<Navigate to={`/dashboard/12`} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
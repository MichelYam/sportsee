
import './App.css';
import DashBoard from './pages/DashBoard';

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

// 4. Endpoints
// 4.1 Possible endpoints
// This project includes four endpoints that you will be able to use:

// http://localhost:3000/user/${userId} - retrieves information from a user. This first endpoint includes the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.).
// http://localhost:3000/user/${userId}/activity - retrieves a user's activity day by day with kilograms and calories.
// http://localhost:3000/user/${userId}/average-sessions - retrieves the average sessions of a user per day. The week starts on Monday.
// http://localhost:3000/user/${userId}/performance - retrieves a user's performance (energy, endurance, etc.).
// Warning, currently only two users have been mocked. They have userId 12 and 18 respectively.

// 4.2 Examples of queries
// http://localhost:3000/user/12/performance - Retrieves the performance of the user with id 12
// http://localhost:3000/user/18 - Retrieves user 18's main information.
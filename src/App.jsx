import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home';
import CreateAccount from './pages/CreateAccount';
import Login from './pages/Login';
import UserDashboard from './pages/UserDashboard';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
      </Routes>
  );
}

export default App;

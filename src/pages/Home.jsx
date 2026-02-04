import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full sm:w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Welcome to PopX</h2>
        <Button onClick={() => navigate('/create-account')}>Create Account</Button>
        
        <Button onClick={() => navigate('/login')} className=" bg-[var(--col4)]! hover:bg-[var(--col1)]! hover:text-[var(--col5)]! text-[var(--col3)]!">
          Already Registered? Login
        </Button>
      </div>
    </div>
  );
};

export default Home;

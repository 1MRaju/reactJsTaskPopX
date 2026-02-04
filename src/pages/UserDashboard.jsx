import React from 'react';
import { useSelector } from 'react-redux';
import Logout from '../components/Logout';

const UserDashboard = () => {
  const user = useSelector((state) => state.user.user);

  // If user is null (not logged in), show a message or redirect to login page
  if (!user) {
    return <p>Please log in to view your dashboard</p>;
  }

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">User Dashboard</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Full Name</h3>
          <p>{user.fullName || 'No Name'}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold">Email</h3>
          <p>{user.email}</p>
        </div>
      </div>

      <div className="mt-6">
        <Logout />
      </div>
    </div>
  );
};

export default UserDashboard;

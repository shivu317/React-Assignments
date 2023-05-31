// AdminDashboard.js

import React from 'react';

const AdminDashboard = ({ handleLogout }) => {
  return (
    <div>
      <h2>Welcome, Admin!</h2>
      <button onClick={handleLogout}>Logout</button>
      {/* Add your admin dashboard functionality here */}
    </div>
  );
};

export default AdminDashboard;

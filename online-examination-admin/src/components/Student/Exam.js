// Exam.js

import React from 'react';

const Exam = ({ handleLogout }) => {
  return (
    <div>
      <h2>Exam</h2>
      <button onClick={handleLogout}>Logout</button>
      {/* Add your exam functionality here */}
    </div>
  );
};

export default Exam;

// StudentLogin.js

import React, { useState } from 'react';

const StudentLogin = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform authentication logic here
    // Example: Check if username and password are correct
    if (username === 'student' && password === 'password') {
      handleLogin();
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div>
      <h2>Student Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={handleUsernameChange}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default StudentLogin;

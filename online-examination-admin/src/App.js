import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AdminLogin from './components/Admin/AdminLogin';
import AdminDashboard from './components/Admin/AdminDashboard';
import StudentLogin from './components/Student/StudentLogin';
import Exam from './components/Student/Exam';

const App = () => {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [isStudentLoggedIn, setIsStudentLoggedIn] = useState(false);

  const handleAdminLogin = () => {
    setIsAdminLoggedIn(true);
  };

  const handleStudentLogin = () => {
    setIsStudentLoggedIn(true);
  };

  const handleLogout = () => {
    setIsAdminLoggedIn(false);
    setIsStudentLoggedIn(false);
  };

  return (
    <Router>
      <Switch>
        <Route path="/admin/login">
          {isAdminLoggedIn ? (
            <AdminDashboard handleLogout={handleLogout} />
          ) : (
            <AdminLogin handleLogin={handleAdminLogin} />
          )}
        </Route>
        <Route path="/student/login">
          {isStudentLoggedIn ? (
            <Exam handleLogout={handleLogout} />
          ) : (
            <StudentLogin handleLogin={handleStudentLogin} />
          )}
        </Route>
        <Route path="/">
          <AdminLogin handleLogin={handleAdminLogin} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

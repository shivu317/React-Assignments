import React from 'react';
import './components/styles.css';
import UserCrud from './components/UserCrud';
import AddUserForm from './components/AddUserForm';
import { UserProvider } from './components/UserContext';

const App = () => {
  return (
    <UserProvider>
      <div className="app">
        <h1>User CRUD Operations</h1>
        <UserCrud />
        <AddUserForm />
      </div>
    </UserProvider>
  );
};

export default App;

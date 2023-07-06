import React, { useState } from 'react';
import { useUserContext } from './UserContext';

const AddUserForm = () => {
  const { state, dispatch } = useUserContext();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const newUser = {
      id: new Date().getTime().toString(),
      name,
      email
    };
    dispatch({ type: 'ADD_USER', payload: newUser });
    setName('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUserForm;

import React, { useState } from 'react';
import { useUserContext } from './UserContext';

const UserItem = ({ user }) => {
  const { dispatch } = useUserContext();
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const handleUpdate = () => {
    dispatch({ type: 'UPDATE_USER', payload: { ...user, name, email } });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setName(user.name);
    setEmail(user.email);
    setIsEditing(false);
  };

  const handleDelete = () => {
    dispatch({ type: 'DELETE_USER', payload: user.id });
  };

  return (
    <li>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <button onClick={handleUpdate}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      ) : (
        <div>
          <span className="user-name">{name}</span>
          <span className="user-email">{email}</span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </li>
  );
};

const UserCrud = () => {
  const { state } = useUserContext();

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {state.users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
};

export default UserCrud;

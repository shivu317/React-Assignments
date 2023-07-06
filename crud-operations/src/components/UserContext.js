import React, { createContext, useContext, useReducer } from 'react';

// Define initial state
const initialState = {
  users: []
};

// Define reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return {
        ...state,
        users: [...state.users, action.payload]
      };
    case 'UPDATE_USER':
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.payload.id) {
            return action.payload;
          }
          return user;
        })
      };
    case 'DELETE_USER':
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload)
      };
    default:
      return state;
  }
};

// Create context
const UserContext = createContext();

// Component to provide the context
const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the context
const useUserContext = () => useContext(UserContext);

export { UserProvider, useUserContext };

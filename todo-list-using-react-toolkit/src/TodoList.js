import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodoStatus } from './todosSlice';

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  const [newTodoName, setNewTodoName] = useState('');

  const handleAddTodo = () => {
    if (newTodoName.trim() !== '') {
      dispatch(addTodo({
        id: Date.now().toString(),
        name: newTodoName,
        status: 'pending',
      }));
      setNewTodoName('');
    }
  };

  const handleToggleTodoStatus = (id) => {
    dispatch(toggleTodoStatus(id));
  };

  return (
    <div>
      <input
        type="text"
        value={newTodoName}
        onChange={(e) => setNewTodoName(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{ textDecoration: todo.status === 'completed' ? 'line-through' : 'none' }}
            >
              {todo.name}
            </span>
            <button onClick={() => handleToggleTodoStatus(todo.id)}>
              {todo.status === 'completed' ? 'Pending' : 'Complete'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

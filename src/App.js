import React, { useState } from 'react';
import './TodoList.css'; // Import a separate CSS file for styling

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [todo, setTodo] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTodoChange = (e) => {
    setTodo(e.target.value);
  };

  const handleAddTodo = () => {
    if (todo.trim() !== '') {
      setTodos([...todos, { title, todo }]);
      setTitle('');
      setTodo('');
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-container">
      <h2 className="todo-header">Todo List</h2>
      <div className="input-container">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={handleTitleChange}
          placeholder="Enter a title"
        />
      </div>
      <div className="input-container">
        <label htmlFor="todo">Todo:</label>
        <input
          type="text"
          id="todo"
          value={todo}
          onChange={handleTodoChange}
          placeholder="Enter a task"
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      {todos.length > 0 && (
        <ul className="todo-list">
          {todos.map((item, index) => (
            <li key={index} className="todo-item">
              <h3>{item.title}</h3>
              <p>{item.todo}</p>
              <button onClick={() => handleDeleteTodo(index)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;

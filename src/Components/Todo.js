import React from 'react';

const Todo = ({ todo }) => (
  <div className="todo">
    <h3>{todo.title}</h3>
    <p>{todo.description}</p>
    <p>
      <span>Due date:</span>
      {todo.date}
    </p>
    <p>
      <span>Status:</span>
      {todo.status ? 'completed' : 'incomplete'}
    </p>
  </div>
);

export default Todo;

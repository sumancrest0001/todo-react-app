import React, { useState, useEffect } from 'react';
import axios from 'axios';
import log from 'loglevel';

const filterStatus = {
  completed: true,
  incomplete: false,
};

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

const TodoList = ({changeScreen }) => {
  const [filter, setFilter] = useState('all');
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    let isActive = true;
    axios.get('https://suman-todo.herokuapp.com/api/v1/todos')
      .then(response => {
        setFilteredTodos(response.data);
        setTodos(response.data);
      })
      .catch(res => {
        log.error(res.error);
      });
    return () => {
      isActive = false;
    };
  }, []);

  const onChangeFilter = (event) => {
		const filter = event.target.value;
		let filteredTodoList;
		if (filter === 'all') {
			filteredTodoList = todos;
		} else {
			filteredTodoList = todos.filter((todo) => todo.status === filterStatus[filter]);
		}
    setFilter(filter);
    setFilteredTodos(filteredTodoList);
  };
	
  return (
    <div className="todolist">
      <button type="button" className="todolist__button" onClick={changeScreen}>Create new todo</button>
      <div className="todolist__filter-section">
        <label>
          All
          <input
            type="radio"
            value="all"
            name="filter"
            onChange={onChangeFilter}
            checked={filter === 'all'}
          />
        </label>
        <label>
          Completed
          <input
            type="radio"
            value="completed"
            onChange={onChangeFilter}
            name="filter"
            checked={filter === 'completed'}
          />
        </label>
        <label>
          Uncompleted
          <input
            type="radio"
            value="incomplete"
            onChange={onChangeFilter}
            name="filter"
            checked={filter === 'incomplete'}
          />
        </label>
      </div>
      <div className="todolist__todos">
        {filteredTodos.map((todo) => <Todo todo={todo} key={todo.id} />)}
      </div>
    </div>
  );
};

export default TodoList;

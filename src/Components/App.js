import React, { useState } from 'react';
import FormScreen from './FormScreen';
import TodoList from './TodoList';
import ErrorBoundary from '../Components/Error/ErrorBoundary';
import './App.css';

function App() {
  const [screenOne, setScreenOne] = useState(false);
  const onScreenChange = () => {
    setScreenOne(!screenOne);
  };

  return (
    <div className="app">
      {
        screenOne ?
        (<ErrorBoundary>
          <FormScreen changeScreen={onScreenChange} />
        </ErrorBoundary>) :
        (<ErrorBoundary>
          <TodoList changeScreen={onScreenChange} />
        </ErrorBoundary>)
      }
    </div>
  );
}

export default App;

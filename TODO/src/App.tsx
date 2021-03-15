import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([])
  return (
    <div className="App">
      <TodoForm />
      <TodoList items={todos} />
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import TodoList from './Todo/TodoList';

function App() {
  let store = [];
  const appCss = {
    background: 'rgba(191, 196, 200, 0.44) none repeat scroll 0% 0%',
    padding: '50px',
    height: '100vh'
  }

  if (localStorage.getItem('todoStore') !== null) {
    store = JSON.parse(localStorage.getItem('todoStore'));
  } else {
    store = [{
      item: "example todo",
      isCompleted: false
    }]
  }

  const [todos, setTodos] = useState( store );

  const addItem = text => {
    const newTodos = [...todos, { item: text }];
    setTodos(newTodos);
    localStorage.setItem('todoStore', JSON.stringify(newTodos));
  }

  const complete = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
    localStorage.setItem('todoStore', JSON.stringify(newTodos));
  }

  const removeItem = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    localStorage.setItem('todoStore', JSON.stringify(newTodos));
  }

  return (
    <div style={appCss}>
      <TodoList todos={todos} addItem={addItem} completeTodo={complete} removeItem={removeItem} />
    </div>
  );
}

export default App;

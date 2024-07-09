// src/App.js
import React from 'react';
import './App.css';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>To-Do App</h1>
        <TaskInput />
        <TaskList />
      </header>
    </div>
  );
}

export default App;
// src/components/TaskInput.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const addTask = () => {
    if (task) {
      dispatch({ type: 'ADD_TASK', payload: task });
      setTask('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addTask}>Add Task</button>
    </div>
  );
};

export default TaskInput;
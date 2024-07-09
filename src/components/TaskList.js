// src/components/TaskList.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(null);
  const [newTask, setNewTask] = useState('');

  const deleteTask = (index) => {
    dispatch({ type: 'DELETE_TASK', payload: index });
  };

  const editTask = (index, task) => {
    setIsEditing(index);
    setNewTask(task);
  };

  const updateTask = (index) => {
    dispatch({ type: 'EDIT_TASK', payload: { index, newTask } });
    setIsEditing(null);
    setNewTask('');
  };

  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          {isEditing === index ? (
            <>
              <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
              />
              <button onClick={() => updateTask(index)}>Save</button>
            </>
          ) : (
            <>
              {task}
              <button onClick={() => editTask(index, task)}>Edit</button>
              <button onClick={() => deleteTask(index)}>Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
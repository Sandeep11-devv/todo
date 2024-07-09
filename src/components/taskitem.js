import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask } from '../redux/actions/taskActions';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  return (
    <li>
      {task}
      <button onClick={() => dispatch(deleteTask(task))}>Delete</button>
    </li>
  );
};

export default TaskItem;
// src/store.js
import { createStore } from 'redux';

// Initial state
const initialState = {
  tasks: []
};

// Reducer
const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      };
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter((task, index) => index !== action.payload)
      };
    case 'EDIT_TASK':
      const updatedTasks = state.tasks.map((task, index) =>
        index === action.payload.index ? action.payload.newTask : task
      );
      return {
        ...state,
        tasks: updatedTasks
      };
    default:
      return state;
  }
};

// Create store
const store = createStore(taskReducer);

export default store;
import { ADD_TASK, DELETE_TASK } from '../actions/taskActions';

const initialState = {
  tasks: []
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task !== action.payload)
      };
    default:
      return state;
  }s
};

export default taskReducer;
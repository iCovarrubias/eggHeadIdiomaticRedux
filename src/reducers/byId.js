
const byId = (state = {}, action) => {
  // case 'FETCH_TODOS_SUCCESS':
  // case 'ADD_TODO_SUCESS':
  if (action.response) {
    return {
      ...state,
      ...action.response.entities.todos
    };
  }
  return state;
};

export default byId;

export const getTodo = (state, id) => state[id];

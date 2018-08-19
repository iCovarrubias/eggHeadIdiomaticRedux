import {combineReducers} from 'redux';
import todos, * as fromTodos from './todos';

//main reducer
const todoApp = combineReducers({
	todos
});

export default todoApp;

/*
	10. Colocating selectors with reducers
	- Receives the whole state of the application and it specifies the slice of the state this reducer works on
	- Encapsulates all the knowledge of the application state shape and it figures out the logic of
		getVisibleTodos according to the logic in the selectors.
*/
export const getVisibleTodos = (state, filter) =>
  fromTodos.getVisibleTodos(state.todos, filter);

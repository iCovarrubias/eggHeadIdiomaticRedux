import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {toggleTodo} from '../actions';
import { getVisibleTodos } from '../reducers/reducers'




//presentational component
const Todo = ({onClick, completed, text}) => (
	<li
		onClick={onClick}
		style={{
			textDecoration:
				completed ?
				'line-through' :
				'none'
		}}
	>
		{text}
	</li>
);

//presentational component
const TodoList = ({todos, onTodoClick}) => (
	<ul>
		{
			todos.map(todo =>
				<Todo
					key={todo.id}
					{...todo}
					onClick={() => onTodoClick(todo.id)}
				/>
			)
		}
	</ul>
);


//maps the redux store state to the props of the TodoList component
const mapStatetoProps = (state, {match}) => ({
	todos: getVisibleTodos(
			state,
			match.params.filter || 'all'
		)
});
//maps the dispatch method to the callback props of the TodoList component
//in other words: which callback prop dispatches which action
// const mapDispatchToProps = (dispatch) => ({
// 	onTodoClick(id) {
// 		dispatch(toggleTodo(id));
// 	}
// });

/*
	mapDispatchToProps shorthand: 
		when the arguments in the method we are dispatching, match exactly the ones passed to the action
		we can use a special shorthand notation, a plain object mapping the name of the callback props we 
		want to inject and the action creator functions
*/

const VisibleTodoList = withRouter(connect(
	mapStatetoProps,
	{ onTodoClick: toggleTodo }
)(TodoList));//passing the presentational component that I want to wrap and pass the props to


export default VisibleTodoList;



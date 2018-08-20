import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import * as actions from '../actions';
import { getVisibleTodos, getIsFetching } from '../reducers'


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


class VisibleTodoList extends React.Component {
	componentDidMount(){
		this.fetchData();
	}

	componentDidUpdate(prevProps){
		if (this.props.filter !== prevProps.filter) {
			this.fetchData();
		}
	}

	fetchData() {
		const {filter, fetchTodos} = this.props;
		fetchTodos(filter);
	}

	render() {
		const {toggleTodo, todos, isFetching} = this.props;

		if (isFetching && !todos.length) {
			return <p>Loading...</p>
		}
		return <TodoList onTodoClick={toggleTodo} todos={todos} />
	}
}


//maps the redux store state to the props of the TodoList component
const mapStatetoProps = (state, {match}) => {
	const filter = match.params.filter || 'all';
	return {
		todos: getVisibleTodos(state, filter),
		isFetching: getIsFetching(state, filter),
		filter
	};
};
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

VisibleTodoList = withRouter(connect(
	mapStatetoProps,
	actions
)(VisibleTodoList));//passing the presentational component that I want to wrap and pass the props to


export default VisibleTodoList;



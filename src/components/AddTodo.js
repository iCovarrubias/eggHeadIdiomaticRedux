import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions';

//isma TODO:
// - Extract keyPressed and click events as they do the same
// - Enable/disable button based on input
let AddTodo = ({dispatch}) => {
	let input;
	return (
		<div>
			<input
				ref={node => {input = node;}}
				onKeyPress={(e) => {
					if (e.which === 13) {
						dispatch(addTodo(input.value));
						input.value = '';
					}
				}}/>
			<button onClick={() => {
				dispatch(addTodo(input.value));
				input.value = '';
			}}>
				Add Todo
			</button>
		</div>
	);
};
//there's no need to subscribe to the store as we don't calculate any props from the state, so no need for the first argument
//it is really common to just pass dispatch, so if you pass null you'll get it in the props anyways, or you can just omit it
export default AddTodo = connect()(AddTodo);

//1. One way of calling connect
// AddTodo = connect(
// 	state => {
// 		return {};
// 	},
// 	dispatch => {
// 		return {dispatch}
// 	}
// )(AddTodo);

//2. Another way of calling connect
// AddTodo = connect(
// 	null,//tells connect that there's no need to subscribe to the store as we don't calculate any props from the state
// 	null,//it is really common to just pass dispatch, so if you pass null you'll get it in the props anyways
// )(AddTodo);


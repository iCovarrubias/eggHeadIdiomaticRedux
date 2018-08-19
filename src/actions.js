import {v4} from 'node-uuid';

// this is an action creator
export const addTodo = (text) => ({
	type: 'ADD_TODO',
	id: v4(),
	text
});

export const toggleTodo = (id) => ({
	type: 'TOGGLE_TODO',
	id
});

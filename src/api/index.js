import {v4} from 'node-uuid';

const fakeDatabase = {
	todos: [{
		id: v4(),
		text: 'hey',
		completed: true
	},{
		id: v4(),
		text: 'you',
		completed: true
	},{
		id: v4(),
		text: 'out there in the cold',
		completed: false
	}]
};

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchTodos = (filter) =>
	delay(500).then(() => {
		if (Math.random() > 0.5) {
			console.log(`Throwing errrrrr ${filter}`);
			throw new Error(`Error while fetching todos with filter: ${filter}`);
		}

		switch (filter) {
			case 'all':
				return fakeDatabase.todos;
			case 'active':
				return fakeDatabase.todos.filter(t => !t.completed);
			case 'completed':
				return fakeDatabase.todos.filter(t => t.completed);
			default:
				throw new Error(`Unknown filter: ${filter}`);
		}
	});

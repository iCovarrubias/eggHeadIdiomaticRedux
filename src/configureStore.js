import {createStore} from 'redux';
import todoApp from './reducers';

const addLoggingSupportToDispatch = (store) => {
	const rawDispatch = store.dispatch;
	if (!console.group) {
		return rawDispatch;
	}

	return (action) => {
		console.group(action.type);
		console.log('%c prev state', 'color: gray', store.getState());
		console.log('%c action', 'color: blue', action);
		const returnValue = rawDispatch(action);
		console.log('%c nextState', 'color: green', store.getState());
		console.groupEnd(action.type);
		return returnValue;
	};
};

const addPromiseSupportToDispatch = (store) => {
	const next = store.dispatch;
	return (action) => {
		if (typeof action.then === 'function') {
			return action.then(next);
		}
		return next(action);
	}
};

const configureStore = () => {
	const store = createStore(
		todoApp,
		// persistedState,
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);

	store.dispatch = addLoggingSupportToDispatch(store);
	store.dispatch = addPromiseSupportToDispatch(store);

	return store;
}

export default configureStore;

import {createStore} from 'redux';
import todoApp from './reducers';


const addPromiseSupportToDispatch = (store) => {
	const rawDispatch = store.dispatch;
	return (action) => {
		if (typeof action.then === 'function') {
			return action.then(rawDispatch);
		}
		return rawDispatch(action);
	}
}

const configureStore = () => {
	const store = createStore(
		todoApp,
		// persistedState,
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);

	store.dispatch = addPromiseSupportToDispatch(store);

	return store;
}

export default configureStore;

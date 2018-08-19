import {createStore} from 'redux';
import todoApp from './reducers';

const configureStore = () => {
	const store = createStore(
		todoApp,
		// persistedState,
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);

	return store;
}

export default configureStore;

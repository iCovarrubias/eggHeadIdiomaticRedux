import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import todoApp from './reducers';

const configureStore = () => {
	const middlewares = [thunk];
	if(process.env.NODE_ENV !== 'production') {
		middlewares.push(createLogger());
	}

	//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	return createStore(
		todoApp,
		// persistedState,
		applyMiddleware(...middlewares)
	);
}

export default configureStore;

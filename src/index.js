//1. Simplifying arrow functions
//2. Supplying the initial state
//3. Persisting the state to the local storage
//4. Huge code refactor
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';

// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import configureStore from './configureStore';

const store = configureStore();



ReactDOM.render(
	<Root store={store} />,
	document.getElementById('root')
);

//View layer END
///////////////////////////
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './reducers'
import App from './App.js';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(allReducers)

ReactDOM.render(
	<Provider store={store}>
		<App/> 
	</Provider>, 
	document.getElementById('root')
	);
registerServiceWorker();

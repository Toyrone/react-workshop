import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { todosReducer, filterReducer } from './reducers/index';
import TodosList from './components/TodosList';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const rootReducer = combineReducers({
	todos: todosReducer,
	filters: filterReducer
})

const store = createStore(rootReducer);

// ReactDOM.render(
// 	<Provider store={store}>
// 		<App /> 
// 	</Provider>,
// 	document.getElementById('root')
// );

function mapStateToProps(state) {
	return {
	  todos: state.todos
	};
}

const ConnectedTodoList = connect(mapStateToProps)(TodosList);

function TodoApp() {
	return (
		<div>
			<h3>Todo App</h3>
			<ConnectedTodoList />
		</div>
	);
}

ReactDOM.render(
	<Provider store={store}>
		<TodoApp />
	</Provider>,
	document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

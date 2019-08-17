import React from 'react';
import { connect } from 'react-redux';
import { doToggleTodo } from '../actions/index';

function mapDispatchToProps(dispatch) {
	return {
		onToggleTodo: id => dispatch(doToggleTodo(id))
	}
}

function TodoItem({ todo, onToggleTodo }) {
	const { name, id, completed } = todo;
	return (
		<div>
			{name}
			<button type="button" onClick={() => onToggleTodo(id)}>
				{completed ? 'Inompleted' : 'Complete'}
			</button>
		</div>
	)
}

const ConnectedTodoItem = connect(null, mapDispatchToProps)(TodoItem);

export default ConnectedTodoItem;
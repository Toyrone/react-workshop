import React from 'react';

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

export default TodoItem;
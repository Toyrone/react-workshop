import React from 'react';
import ConnectedTodoItem from './TodoItem';

function TodosList({ todos }) {
	console.log(todos);
	return (
		<div>
			{todos.map(todo => 
				<ConnectedTodoItem 
					key={todo.id}
					todo={todo} />)}
		</div>
	)
}

export default TodosList;
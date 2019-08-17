import React from 'react';
import TodoItem from './TodoItem';

function TodosList({ todos, onToggleTodo}) {
	return (
		<div>
			{todos.map(todo => 
				<TodoItem 
					key={todo.id}
					todo={todo}
					onToggleTodo={onToggleTodo} />)}
		</div>
	)
}

export default TodosList;
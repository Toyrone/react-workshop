const TODO_ADD = 'TODO_ADD'; 
const TODO_TOGGLE = 'TODO_TOGGLE'; 
const FILTER_SET = 'FILTER_SET';

export function doAddTodo(id, name) { 
	return {
		type: TODO_ADD,
		todo: { id, name },
	};
}

export function doToggleTodo(id) {
	return {
		type: TODO_TOGGLE,
		todo: { id },
	};
}

export function filterTodo(filter) {
	return {
		type: FILTER_SET,
		filter
	}
}

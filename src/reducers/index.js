const TODO_ADD = 'TODO_ADD'; 
const TODO_TOGGLE = 'TODO_TOGGLE'; 
const FILTER_SET = 'FILTER_SET';

const initialState = {
	todos: [
		{ id: '0', name: 'learn redux' }, 
		{ id: '1', name: 'learn mobx' }
	],
	filter: 'SHOW_ALL'
};

export function todosReducer(state = initialState.todos, action) {
	switch (action.type) {
		case TODO_ADD:
			return { ...state.todos, ...action, completed: false };
		case TODO_TOGGLE:
			return state.todos.map(todo => 
				todo.id === action.todo.id ? 
					Object.assign({}, todo, { completed: !todo.completed }) :
					todo
			)
		default:
			return state;
	}
}

export function filterReducer(state = initialState.filter, action) { 
	switch(action.type) {
		case FILTER_SET:
			return action.filter;
		default: 
			return state;
	}
}

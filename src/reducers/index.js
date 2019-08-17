const TODO_ADD = 'TODO_ADD'; 
const TODO_TOGGLE = 'TODO_TOGGLE'; 
const FILTER_SET = 'FILTER_SET';

const initialState = {
	todos: [
		{ id: '0', name: 'learn redux', completed: false }, 
		{ id: '1', name: 'learn mobx', completed: false }
	],
	filter: 'SHOW_ALL'
};

export function todosReducer(state = initialState.todos, action) {
	switch (action.type) {
		case TODO_ADD:
			const todo = { ...action.todo, completed: false };
			return [ ...state, todo ];
		case TODO_TOGGLE:
			return state.map(todo => 
				todo.id === action.todo.id 
				? { ...todo, completed: !todo.completed }
				: todo
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

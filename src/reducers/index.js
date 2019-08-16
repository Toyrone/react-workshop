
const initialState = {
	state: {
		tech: 'React'
	}
}

function reducer(state = initialState, action) {
	switch (action.type) {
		case 'withdraw':
			return {
				...state,
				...{ tech: action.tech }
			};
		default:
			return state;
	}
}

export default reducer;
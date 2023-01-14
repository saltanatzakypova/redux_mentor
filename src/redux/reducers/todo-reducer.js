const initialState = {
	todos: [
		{
			title: 'Initial Task',
			id: 'e1',
		},
	],
	counter: 0,
}

export const todoReducer = (state = initialState, action) => {
	if (action.type === 'ADD_TODO') {
		const newTodos = [...state.todos, action.payload]
		return {
			...state,
			todos: newTodos,
		}
	}
	return state
}

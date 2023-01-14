import React, { useContext } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TodoContext } from './context/todo-context'

export const BASE_URL =
	'https://auth-practice-7adc9-default-rtdb.firebaseio.com'
// силердин firebase ссылканар

const App = (props) => {
	// console.log('render')
	// const context = useContext(TodoContext)

	// const [title, setTitle] = useState('')

	// const addTodoHandler = async () => {
	// 	const newTodo = {
	// 		title: title,
	// 		completed: false,
	// 	}
	// 	await fetch(`${BASE_URL}/todos.json`, {
	// 		method: 'POST',
	// 		headers: {
	// 			'Content-type': 'application/json',
	// 		},
	// 		body: JSON.stringify(newTodo),
	// 	})
	// 	context.getAllTodos()
	// 	setTitle('')
	// }

	// const changeHandler = (e) => {
	// 	setTitle(e.target.value)
	// }

	// const deleteTodoHandler = async (id) => {
	// 	fetch(`${BASE_URL}/todos/${id}.json`, {
	// 		method: 'DELETE',
	// 	}).then(() => context.getAllTodos())
	// }
	// return (
	// 	<>
	// 		<input value={title} type='text' onChange={changeHandler} />
	// 		<button onClick={addTodoHandler}>add todo</button>
	// 		<ul>
	// 			{context.todos.map((todo) => (
	// 				<li key={todo.id}>
	// 					<span>{todo.title}</span>
	// 					<button onClick={() => deleteTodoHandler(todo.id)}>
	// 						delete
	// 					</button>
	// 				</li>
	// 			))}
	// 		</ul>
	// 	</>
	// )

	const { todos } = useSelector((state) => {
		return state.todos
	})

	const dispatch = useDispatch()

	const inputRef = useRef()
	const addTodoHandler = () => {
		const enteredValue = inputRef.current.value
		dispatch({
			type: 'ADD_TODO',
			payload: { title: enteredValue, id: Math.random().toString() },
		})
	}
	return (
		<>
			<input type='text' ref={inputRef} />
			<button onClick={addTodoHandler}>Add</button>
			<ul>
				{todos.map((todo) => {
					return <li key={todo.id}>{todo.title}</li>
				})}
			</ul>
		</>
	)
}

export default App

/* eslint-disable indent */
import { useReducer } from 'react'
import { Menu } from './Menu'

const TYPES = {
	INCREMENT: 'INCREMENT',
	DECREMENT: 'DECREMENT',
	RESET: 'RESET',
	INCREMENT6: 'INCREMENT6',
}

const initialState = { count: 0 }

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case TYPES.INCREMENT:
			return { count: state.count + 1 }
		case TYPES.DECREMENT:
			return { count: state.count - 1 }
		case TYPES.INCREMENT6:
			return { count: state.count * action.payload }
		case TYPES.RESET:
			return initialState
		default:
			return state
	}
}

export const UseReducer = () => {
	const [state, dispatch] = useReducer(reducer, initialState)

	return (
		<div>
			<Menu />
			<br />
			<h3>COUNT</h3>
			<p>{state.count}</p>
			<button onClick={() => dispatch({ type: TYPES.INCREMENT })}>
				INCREMENT
			</button>
			<button onClick={() => dispatch({ type: TYPES.DECREMENT })}>
				DECREMENT
			</button>
			<button onClick={() => dispatch({ type: TYPES.INCREMENT6, payload: 6 })}>
				INCREMENT * 6
			</button>
			<button onClick={() => dispatch({ type: TYPES.RESET })}>RESET</button>
		</div>
	)
}

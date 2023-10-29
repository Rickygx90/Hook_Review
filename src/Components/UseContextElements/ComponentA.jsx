import { useContext, useState } from 'react'
import { Context } from '../../context/ComponentProvider'

export const ComponentA = () => {
	const [name, setName] = useContext(Context)
	const [nameInput, setNameInput] = useState('')

	const handleChange = e => {
		setNameInput(e.target.value)
	}
	return (
		<div>
			<h4>ComponentA, Hola {name}</h4>
			<input type='text' value={nameInput} onChange={handleChange} />
			<button onClick={() => setName(nameInput)}>Cambiar nombre</button>
		</div>
	)
}

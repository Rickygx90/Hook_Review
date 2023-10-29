import { useRef } from 'react'
import { Menu } from './Menu'

export const UseRef = () => {
	const inputRef = useRef()
	const divRef = useRef()

	const cambiarTexto = () => {
		console.log(inputRef.current.value)
		divRef.current.innerText = inputRef.current.value
	}
	return (
		<div>
			<Menu />
			<br />
			<h2>UseRef</h2>
			<div ref={divRef}></div>
			<input type='text' ref={inputRef} />
			<button onClick={() => cambiarTexto()}>Cambiar texto</button>
		</div>
	)
}

import { useMemo, useState } from 'react'
import { Menu } from './Menu'
import PropTypes from 'prop-types'

const Message = ({ message }) => {
	const messageMemo = useMemo(() => {
		console.log('function Executed')
		return `Hola ${message}`
	}, [message])
	return <p>{messageMemo}</p>
}
Message.propTypes = {
	message: PropTypes.string,
}

export const UseMemo = () => {
	const [name, setName] = useState('Douglas')
	const [inputName, setInputName] = useState('')

	return (
		<div>
			<Menu />
			<h2>UseMemo</h2>
			<p style={{ marginInline: '25%' }}>
				Con este componente vamos a memorizar las props que se pasan de un
				componente a otro y dependiendo si cambian o no dichas propiedades se
				ejecutara la funcion envuelta en el useMemo. Para este caso la prop sera
				&ldquo;message&ldquo; la cual podremos cambiar con el input que se
				encuentra abajo y podremos ver las ejecuciones de la funcion dentro del
				useMemo mediente la consola.
			</p>
			<div>
				<input
					type='text'
					value={inputName}
					onChange={e => {
						setInputName(e.target.value)
					}}
				/>
				<button
					onClick={() => {
						setName(inputName)
					}}
				>
					Cambiar Nombre
				</button>
			</div>
			<Message message={name} />
		</div>
	)
}

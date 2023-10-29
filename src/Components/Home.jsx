import { useContext } from 'react'
import { Context } from '../context/ComponentProvider'
import { Menu } from './Menu'

export const Home = () => {
	const [name] = useContext(Context)
	return (
		<div>
			<Menu />
			<br />
			<h1>Sesion de {name}</h1>
		</div>
	)
}

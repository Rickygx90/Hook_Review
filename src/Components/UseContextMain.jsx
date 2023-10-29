import { useContext } from 'react'
import { Context } from '../context/ComponentProvider'
import { ComponentA } from './UseContextElements/ComponentA'
import { ComponentB } from './UseContextElements/ComponentB'
import { Menu } from './Menu'

export const UseContextMain = () => {
	const [name] = useContext(Context)
	return (
		<div>
			<Menu />
			<br />
			<h2>UseContextMain</h2>
			<h3>{name}</h3>
			<ComponentA />
			<ComponentB />
		</div>
	)
}

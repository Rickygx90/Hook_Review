import { useContext } from 'react'
import { Context } from '../../context/ComponentProvider'
import { ComponentBb } from './ComponentBb'

export const ComponentB = () => {
	const [name] = useContext(Context)
	return (
		<div>
			<h4>ComponentB, Hola {name}</h4>
			<div>
				<ComponentBb />
			</div>
		</div>
	)
}

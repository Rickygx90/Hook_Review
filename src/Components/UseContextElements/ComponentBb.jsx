import { useContext } from 'react'
import { Context } from '../../context/ComponentProvider'

export const ComponentBb = () => {
	const [name] = useContext(Context)
	return <h5>ComponentBb, Hola {name}</h5>
}

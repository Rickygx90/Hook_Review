import { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const Context = createContext()

export const ComponentProvider = ({ children }) => {
	const [name, setName] = useState('Douglas')
	return <Context.Provider value={[name, setName]}>{children}</Context.Provider>
}

ComponentProvider.propTypes = {
	children: PropTypes.node.isRequired,
}

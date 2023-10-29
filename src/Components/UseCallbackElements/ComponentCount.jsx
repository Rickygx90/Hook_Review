import React from 'react'
import PropTypes from 'prop-types'

const ComponentCount = ({ title, count, increaceFuntion }) => {
	console.log(title)
	return (
		<div>
			<h3>{title}</h3>
			<h4>{count}</h4>
			<button onClick={() => increaceFuntion()}>Increace</button>
		</div>
	)
}
ComponentCount.propTypes = {
	title: PropTypes.string,
	count: PropTypes.number,
	increaceFuntion: PropTypes.func,
}
export default React.memo(ComponentCount)

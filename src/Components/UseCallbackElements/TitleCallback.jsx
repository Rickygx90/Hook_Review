import React from 'react'

const TitleCallback = () => {
	console.log('TitleCallback')
	return <h1>UseCallback with React.memo</h1>
}

export default React.memo(TitleCallback)

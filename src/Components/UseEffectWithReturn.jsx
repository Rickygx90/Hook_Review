import { useState, useEffect } from 'react'
import { Menu } from './Menu'

const ClicksCounter = () => {
	const [count, setCount] = useState(0)
	useEffect(() => {
		const handleClick = () => {
			setCount(prevC => prevC + 1)
		}
		document.addEventListener('click', handleClick)
		return () => {
			console.log('Return CLEANUP', count)
			document.removeEventListener('click', handleClick)
		}
	}, [])

	return (
		<>
			<p>{count}</p>
		</>
	)
}

const Interval = () => {
	const [count, setCount] = useState(0)
	const [start, setStart] = useState(true)

	useEffect(() => {
		if (!start) return
		const idInterval = setInterval(() => {
			console.log('setInterval')
			setCount(prevC => prevC + 1)
		}, 1000)
		return () => {
			console.log('Return CLEANUP', count)
			clearInterval(idInterval)
		}
	}, [start])

	return (
		<>
			<p>{count}</p>
			<button onClick={() => setStart(!start)}>Stop/Start</button>
		</>
	)
}

export const UseEffectWithReturn = () => {
	const [show, setShow] = useState(true)
	return (
		<div>
			<Menu />
			<br />
			{show && <Interval />}
			<button onClick={() => setShow(!show)}>Show/Hidden</button>
		</div>
	)
}

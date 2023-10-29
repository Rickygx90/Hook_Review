import { useCallback, useState } from 'react'
import ComponentCount from './UseCallbackElements/ComponentCount'
import { Menu } from './Menu'
import TitleCallback from './UseCallbackElements/TitleCallback'

export const UseCallback = () => {
	console.log('RENDER')
	const [count1, setCount1] = useState(0)
	const [count2, setCount2] = useState(0)
	const [count3, setCount3] = useState(0)

	const increaceFuntion1 = useCallback(() => {
		setCount1(count1 + 1)
	}, [count1])
	const increaceFuntion2 = useCallback(() => {
		setCount2(count2 + 1)
	}, [count2])
	const increaceFuntion3 = useCallback(() => {
		setCount3(count3 + 1)
	}, [count3])

	return (
		<div>
			<Menu />
			<br />
			<TitleCallback />
			<div style={{ display: 'flex', justifyContent: 'space-around' }}>
				<ComponentCount
					title='Contador 1'
					count={count1}
					increaceFuntion={increaceFuntion1}
				/>
				<ComponentCount
					title='Contador 2'
					count={count2}
					increaceFuntion={increaceFuntion2}
				/>
				<ComponentCount
					title='Contador 3'
					count={count3}
					increaceFuntion={increaceFuntion3}
				/>
			</div>
		</div>
	)
}

import { useState } from 'react'
import { useFetch } from '../utils/useFetch'
import { Menu } from './Menu'

export const CustomHook = () => {
	const optionSelect = [
		{ value: 1, name: 'Pokemon', url: 'https://pokeapi.co/api/v2/pokemon/' },
		{
			value: 2,
			name: 'League of Legends',
			url: 'https://league-of-legends-champions.onrender.com/App/Champions',
		},
	]
	const [game, setGame] = useState({
		value: 1,
		name: 'Pokemon',
		url: 'https://pokeapi.co/api/v2/pokemon/',
	})

	//	Mi custom hook
	const { isLoading, data, error } = useFetch(game.url, 'GET')
	const handleChange = e => {
		const { value } = e.target
		setGame(optionSelect.find(e => parseInt(e.value) === parseInt(value)))
	}

	const Elements = () => {
		if (isLoading) return <p>Loading...</p>

		if (data && data.results && data.results.length)
			return data.results.map((e, index) => <p key={index}>{e.name}</p>)

		if (data && data.length > 0)
			return data.map((e, index) => <p key={index}>{e.champion}</p>)

		if (error) return <p>{JSON.stringify(error)}</p>
	}

	return (
		<div>
			<Menu />
			<br />
			<h2>Select your favorite game:</h2>

			<select name='select' value={game.value} onChange={handleChange}>
				{optionSelect &&
					optionSelect.map((option, index) => (
						<option key={index} value={option.value}>
							{option.name}
						</option>
					))}
			</select>
			<Elements />
		</div>
	)
}

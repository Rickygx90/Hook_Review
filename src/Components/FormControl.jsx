import { useEffect, useState } from 'react'
import { Menu } from './Menu'

export const FormControl = () => {
	const [formFields, setFormFields] = useState({
		email: '',
		amount: '',
		password: '',
		gender: '',
	})
	const [genders, setGenders] = useState([{ value: '', name: 'Select...' }])
	const [error, setError] = useState('')

	useEffect(() => {
		setTimeout(() => {
			const response = [
				{ value: '1', name: 'Male' },
				{ value: '0', name: 'Female' },
			]
			setGenders(genders.concat(response))
		}, 5000)
	}, [])

	const handleChange = e => {
		const { name, value } = e.target
		if (name === 'amount') {
			let aux = value.replace(/[^0-9.]/g, '')
			if (aux.length === 1 && aux === '.') {
				aux = '0.'
			}
			// Asegura que solo haya un punto decimal en la entrada
			const decimalCount = aux.split('.').length - 1
			if (decimalCount > 1) {
				aux = aux.slice(0, aux.lastIndexOf('.'))
			}
			setFormFields({
				...formFields,
				[name]: aux,
			})
		} else {
			setFormFields({
				...formFields,
				[name]: value,
			})
		}
	}

	const handleSubmit = e => {
		e.preventDefault()
		if (
			formFields.email === '' ||
			formFields.amount === '' ||
			formFields.password === '' ||
			formFields.gender === ''
		)
			setError('Todos los campos son necesarios')
		else setError('')
		console.log(formFields)
	}

	return (
		<div>
			<Menu />
			<br />
			<h2>Formulario en React</h2>
			<form onSubmit={handleSubmit}>
				<label>Email</label>
				<input
					name='email'
					type='text'
					value={formFields.email}
					onChange={handleChange}
				/>
				<br />
				<label>Amount</label>
				<input
					name='amount'
					type='text'
					value={formFields.amount}
					onChange={handleChange}
				/>
				<br />
				<label>Password</label>
				<input
					name='password'
					type='password'
					value={formFields.password}
					onChange={handleChange}
				/>
				<br />
				<label>Gender</label>
				<select name='gender' value={formFields.gender} onChange={handleChange}>
					{genders &&
						genders.map((gender, index) => (
							<option key={index} value={gender.value}>
								{gender.name}
							</option>
						))}
				</select>
				<br />
				<button type='submit'>Send</button>
				{error.length > 0 && <p>{error}</p>}
			</form>
		</div>
	)
}

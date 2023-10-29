import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { validarDecimalPunto } from '../utils/functions'
import { Menu } from './Menu'

export const FormReactHook = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm()

	const [genders, setGenders] = useState([{ value: '', name: 'Select...' }])

	useEffect(() => {
		setTimeout(() => {
			const response = [
				{ value: '1', name: 'Male' },
				{ value: '0', name: 'Female' },
			]
			if (genders.length <= 1) setGenders(genders.concat(response))
		}, 5000)
	}, [genders])

	const onSubmit = data => {
		console.log(data)
	}
	return (
		<div>
			<Menu />
			<br />
			<h2>Formulario con React Hook Form</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<label>Email</label>
				<input type='text' {...register('email', { required: true })} />
				{errors.email && <span>This field is required</span>}
				<br />
				<label>Amount</label>
				<input
					type='text'
					{...register('amount', {
						required: true,
						onChange: e => {
							e.target.value = validarDecimalPunto(e.target.value)
						},
					})}
				/>
				{errors.amount && <span>This field is required</span>}
				<br />
				<label>Password</label>
				<input type='password' {...register('password', { required: true })} />
				{errors.password && <span>This field is required</span>}
				<br />
				<label>Gender</label>
				<select {...register('gender', { required: true })}>
					{genders &&
						genders.map((gender, index) => (
							<option key={index} value={gender.value}>
								{gender.name}
							</option>
						))}
				</select>
				{errors.gender && <span>This field is required</span>}
				<br />
				<button type='submit'>Send</button>
				<button
					type='button'
					onClick={() =>
						reset({ email: '', amount: '', password: '', gender: '' })
					}
				>
					Clear
				</button>
			</form>
		</div>
	)
}

import React, { useState } from 'react'
import img1 from '../images/signup_img.svg'
import { Button, Checkbox, Input, Radio } from '@material-tailwind/react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const SignUp = () => {
	const [user, setUser] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		phonenumber: '',
		confirmPassword: '',
		gender: '',
	})

	const [errors, setErrors] = useState({})
	const [showPassword, setShowPassword] = useState(false)
	const navigate = useNavigate()

	const updateUserInput = (e) => {
		const { name, value } = e.target
		setUser((prevUser) => ({
			...prevUser,
			[name]: value,
		}))
	}

	const handleOnSubmit = (e) => {
		e.preventDefault()

		const newErrors = {}

		Object.keys(user).forEach((key) => {
			if (user[key] === '') {
				newErrors[key] = `${
					key.charAt(0).toUpperCase() + key.slice(1)
				} is required`
			}
		})

		if (user.password !== user.confirmPassword) {
			newErrors.confirmPassword = "Passwords don't match"
		}

		if (Object.keys(newErrors).length > 0) {
			setErrors(newErrors)
			return
		}

		const userInfo = {
			firstName: user.firstName,
			lastName: user.lastName,
			email: user.email,
			password: user.password,
			phonenumber: user.phonenumber,
			gender: user.gender,
			cart: [],
		}

		axios
			.post('https://booming-odd-lark.glitch.me/users', userInfo)
			.then(() => {
				navigate('/login')
			})
			.catch((error) => console.error(error.message))
	}

	return (
		<div className='flex w-full h-screen'>
			<div className='hidden lg:flex h-full item-center justify-center'>
				<img
					src={img1}
					alt='the Sign_up image'
				/>
			</div>
			<div className='w-full lg:w-2/3 flex items-center justify-center bg-gray-100'>
				<form
					onSubmit={handleOnSubmit}
					className='bg-white shadow-xl px-10 py-10 rounded-3xl border-2'
				>
					<h1 className='flex justify-center text-3xl font-bold mb-10'>
						Create New Account
					</h1>

					<div className='grid grid-cols-1 lg:grid-cols-2 justify-center w-full gap-6 lg:gap-9'>
						<div>
							{errors.firstName && (
								<p className='text-red-500 font-bold mb-1 font-bold mb-1'>
									{errors.firstName}
								</p>
							)}
							<Input
								name='firstName'
								color='blue'
								label='First Name'
								error={Boolean(errors.firstName)}
								value={user.firstName}
								onChange={updateUserInput}
							/>
						</div>
						<div>
							{errors.lastName && (
								<p className='text-red-500 font-bold mb-1 '>
									{errors.lastName}
								</p>
							)}
							<Input
								name='lastName'
								color='blue'
								label='Last Name'
								error={Boolean(errors.lastName)}
								value={user.lastName}
								onChange={updateUserInput}
							/>
						</div>
						<div>
							{errors.email && (
								<p className='text-red-500 font-bold mb-1'>{errors.email}</p>
							)}
							<Input
								name='email'
								color='blue'
								label='Email'
								error={Boolean(errors.email)}
								value={user.email}
								onChange={updateUserInput}
							/>
						</div>
						<div>
							{errors.phonenumber && (
								<p className='text-red-500 font-bold mb-1'>
									{errors.phonenumber}
								</p>
							)}
							<Input
								name='phonenumber'
								color='blue'
								label='phonenumber'
								error={Boolean(errors.phonenumber)}
								value={user.phonenumber}
								onChange={updateUserInput}
							/>
						</div>
						<div>
							{errors.password && (
								<p className='text-red-500 font-bold mb-1'>{errors.password}</p>
							)}
							<Input
								name='password'
								color='blue'
								type={showPassword ? 'text' : 'password'}
								label='Password'
								error={Boolean(errors.password)}
								value={user.password}
								onChange={updateUserInput}
							/>
						</div>
						<div>
							{errors.confirmPassword && (
								<p className='text-red-500 font-bold mb-1'>
									{errors.confirmPassword}
								</p>
							)}
							<Input
								name='confirmPassword'
								color='blue'
								type={showPassword ? 'text' : 'password'}
								label='Confirm Password'
								error={Boolean(errors.confirmPassword)}
								value={user.confirmPassword}
								onChange={updateUserInput}
							/>
						</div>
					</div>

					<Checkbox
						label='Show Password'
						color='blue'
						onChange={() => setShowPassword((prev) => !prev)}
					/>

					<div className='flex m-4'>
						<p className='text-xl m-2'>
							{user.gender === '' ? 'Please select one' : 'Gender'}
						</p>
						<Radio
							name='gender'
							label='Male'
							value='male'
							color='blue'
							onChange={updateUserInput}
						/>
						<Radio
							name='gender'
							value='female'
							label='Female'
							color='blue'
							onChange={updateUserInput}
						/>
					</div>

					<Button
						className='normal-case items-center text-lg text-center w-full'
						color='blue'
						type='submit'
					>
						Create Account
					</Button>

					<p className='flex items-center justify-center mt-5'>
						Already have an account?
						<Link
							className='text-blue-800 pl-1 hover:font-bold hover:-translate-y-0.5'
							to='/login'
						>
							Log in
						</Link>
					</p>
				</form>
			</div>
		</div>
	)
}

export default SignUp

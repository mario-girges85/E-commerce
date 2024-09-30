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
		phone: '',
		confirmPassword: '',
		gender: '',
	})
	const [firstName, serFirstName] = useState(false)
	const [lastName, setLastName] = useState(false)
	const [email, setEmail] = useState(false)
	const [phone, setPhone] = useState(false)
	const [password, setPassword] = useState(false)
	const [ConfiremPassword, setConfiremPassword] = useState(false)
	const [gender, setGender] = useState(false)
	const navigate = useNavigate()

	const handleOnSumbit = (e) => {
		e.preventDefault()
		if (user.firstName == '') {
			serFirstName(true)
		} else if (user.lastName == '') {
			setLastName(true)
		} else if (user.email == '') {
			setEmail(false)
		} else if (user.phone == '') {
			setPhone(true)
		} else if (user.password == '') {
			setPassword(true)
		} else if (user.confirmPassword == '') {
			setConfiremPassword(true)
		} else if (user.gender == '') {
			setGender(true)
		}
		const userInfo = {
			firstName: user.firstName,
			lastName: user.lastName,
			email: user.email,
			password: user.password,
			phone: user.phone,
			gender: user.gender,
			cart: [],
		}
		axios({
			method: 'post',
			url: 'https://booming-odd-lark.glitch.me/users',
			data: userInfo,
		})
			.then((e) => {
				//your state value
				navigate('/login')
			})
			.catch((e) => console.log(e.message))
	}

	return (
		<div>
			<div className='flex w-full h-screen'>
				<div className='hidden lg:flex h-full item-center justify-center'>
					<img
						src={img1}
						alt='the Sign_up image'
					/>
				</div>
				<div className='w-full lg:w-2/3 flex items-center justify-center bg-gray-100'>
					<form
						onSubmit={(e) => {
							handleOnSumbit(e)
						}}
						className=' bg-white shadow-xl px-10 py-10 rounded-3xl border-2 '
					>
						<h1 className=' flex  justify-center text-3xl  font-bold mb-10 font-body  '>
							Create New Account
						</h1>

						<div className='grid grid-cols-1 lg:grid-cols-2 justify-center w-full  gap-6 lg:gap-9'>
							<Input
								color='blue'
								label='FirstName'
								error={firstName}
								value={user.firstName}
								onChange={(e) =>
									setUser({
										...user,
										firstName: e.target.value,
									})
								}
							/>
							<Input
								error={lastName}
								color='blue'
								label='LastName'
								value={user.lastName}
								onChange={(e) =>
									setUser({
										...user,
										lastName: e.target.value,
									})
								}
							/>
							<Input
								error={email}
								color='blue'
								label='Email'
								value={user.email}
								onChange={(e) =>
									setUser({
										...user,
										email: e.target.value,
									})
								}
							/>
							<Input
								color='blue'
								label='Phone'
								error={phone}
								value={user.phone}
								onChange={(e) =>
									setUser({
										...user,
										phone: e.target.value,
									})
								}
							/>
							<Input
								color='blue'
								type='password'
								label='password'
								error={password}
								value={user.password}
								onChange={(e) =>
									setUser({
										...user,
										password: e.target.value,
									})
								}
							/>
							<Input
								color='blue'
								type='password'
								label='Confirem password'
								error={ConfiremPassword}
								value={user.confirmPassword}
								onChange={(e) =>
									setUser({
										...user,
										confirmPassword: e.target.value,
									})
								}
							/>
						</div>
						<Checkbox
							label='show password'
							color='blue'
						/>
						<div className='flex m-4 '>
							<p className='text-xl m-2  '>
								{gender == true ? 'Please select one' : 'Gender'}
							</p>
							<Radio
								name='type'
								label='Male'
								value='male'
								color='blue'
								onChange={(e) =>
									setUser({
										...user,
										gender: e.target.value,
									})
								}
							/>
							<Radio
								color='blue'
								name='type'
								value='female'
								label='Female'
								onChange={(e) =>
									setUser({
										...user,
										gender: e.target.value,
									})
								}
							/>
						</div>
						<Button
							className=' normal-case items-center text-lg  text-center w-full '
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
							</Link>{' '}
						</p>
					</form>
				</div>
			</div>
		</div>
	)
}

export default SignUp

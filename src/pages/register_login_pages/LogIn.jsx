import React, { useEffect, useState } from 'react'
import img1 from '../images/loginGIF.json'
import { Button, Checkbox, Input } from '@material-tailwind/react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Lottie from 'lottie-react'

const LogIn = ({ users, userid, userdata, setuserid, setcn }) => {
	const [user, setUser] = useState({
		email: '',
		password: '',
	})
	const [emailError, setEmailError] = useState(false)
	const [passwordError, setPasswordError] = useState(false)
	const [allUsers, setAllUsers] = useState([])
	const navigate = useNavigate()
	const [showPassword, setShowPassword] = useState(false)

	const handleOnSubmit = (e) => {
		e.preventDefault()

		setEmailError(false)
		setPasswordError(false)

		if (user.email === '') {
			setEmailError(true)
			return
		}
		if (user.password === '') {
			setPasswordError(true)
			return
		}

		const loginUser = allUsers.find(({ email, password, id }) => {
			return email === user.email && password === user.password
		})

		if (loginUser) {
			localStorage.setItem('id', loginUser.id)
			setuserid(loginUser.id)
			localStorage.id = loginUser.id
			localStorage.cn = true
			setcn(true)
			navigate('/')
		} else {
			console.log('Invalid credentials')
		}
	}

	const checkTheUser = () => {
		axios({
			method: 'get',
			url: 'https://booming-odd-lark.glitch.me/users',
		})
			.then((res) => {
				setAllUsers(res.data)
			})
			.catch((err) => console.error(err.message))
	}

	useEffect(() => {
		checkTheUser()
	}, [])

	return (
		<div className='flex w-full h-screen dark:bg-[#050C9C]'>
			<div className='hidden lg:flex w-[50%] lg:-mr-16  mt-5 h-full item-center '>
				<Lottie animationData={img1} />
			</div>
			<div className='w-full flex items-center justify-center lg:w-1/2 dark:bg-[#050C9C]  bg-white'>
				<form
					onSubmit={(e) => {
						handleOnSubmit(e)
					}}
					className=' bg-white dark:bg-[#3572EF] shadow-xl px-10 py-10 rounded-3xl border-2 '
				>
					<h1 className=' flex dark:text-white  justify-center text-3xl  font-bold mb-10 font-body '>
						Login
					</h1>
					<p className='flex dark:text-white justify-center text-xl text-gray-600 mb-5'>
						Please enter your data
					</p>
					<div className='flex justify-between w-80 flex-col gap-6  '>
						<Input
							className='dark:text-white '
							error={emailError}
							color='black'
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
							className='dark:text-white '
							error={passwordError}
							type={showPassword ? 'text' : 'password'}
							color='black'
							label='password'
							value={user.password}
							onChange={(e) =>
								setUser({
									...user,
									password: e.target.value,
								})
							}
						/>
					</div>
					<div className=' flex items-center dark:text-white '>
						<Checkbox onChange={() => setShowPassword((prev) => !prev)} />
						show password
					</div>
					<Button
						className=' dark:text-white normal-case items-center text-sm  text-center w-full '
						color='blue'
						type='submit'
					>
						Log in
					</Button>
					<p className='flex dark:text-white items-center justify-center mt-5'>
						Don't have an account?
						<Link
							className='text-blue-800 dark:text-white pl-1 hover:font-bold hover:-translate-y-0.5'
							to='/signup'
						>
							Sign up
						</Link>{' '}
					</p>
				</form>
			</div>
		</div>
	)
}

export default LogIn

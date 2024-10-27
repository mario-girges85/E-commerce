import React from 'react'
import { Typography, Button } from '@material-tailwind/react'

import Lottie from 'lottie-react'
import error from './pages/images/error.json'
import { Link } from 'react-router-dom'

const NotFound = () => {
	return (
		<div>
			<div className='h-screen mx-auto grid place-items-center text-center px-8 dark:bg-black'>
				<div>
					<Lottie animationData={error} />
					<Typography
						variant='h1'
						color='blue-gray'
						className='text-2xl'
					>
						It looks like something went wrong.
					</Typography>

					<Button
						color='gray'
						className='w-full px-4 md:w-[8rem] mt-8'
					>
						<Link to='/'>back home</Link>
					</Button>
				</div>
			</div>
		</div>
	)
}

export default NotFound

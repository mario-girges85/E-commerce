import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Button, Input, Radio, Spinner } from '@material-tailwind/react'
// images
import maleImage from '../images/man-user-circle-icon.svg'
import femaleImage from '../images/woman-user-circle-icon.svg'
// React Icons
import { FaRegUser } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { RiLockPasswordFill } from 'react-icons/ri'
// React Hook Form
import { useForm } from 'react-hook-form'

const Profile = () => {

  const [userData, eUserData] = useState();
  const [arrived, earrived] = useState(false);
  const [showInfo, eShowInfo] = useState(false);

  useEffect(() => {
    axios({
      method: "get",
      url: `${import.meta.env.VITE_API_URL_USERS}/${localStorage.id}`,
    })
      .then(({ data }) => {
        eUserData(data);
        earrived(true);
      })
      .catch(({ message }) => console.log(message));
  }, []);

  return (
    <div className="dark:bg-gray-900 py-5">
      {localStorage.id != undefined && userData != undefined && arrived ? (
        <div className="flex flex-col items-center gap-3">
          <div>
            <img
              className="size-40 my-5"
              src={userData.gender == "male" ? maleImage : femaleImage}
              alt="UserImage"
            />
          </div>
          <div className="flex flex-col gap-4 w-2/6 clg:w-1/2 cmd:w-2/3 csm:w-3/4 cxs:w-4/5">
            <Input
              label={<span className="dark:text-white">First Name</span>}
              value={userData.firstname}
              icon={<FaRegUser className="size-4 dark:text-blue-400" />}
              readOnly
              className="dark:text-blue-400 focus:dark:border-blue-400"
            />
            <Input
              label={<span className="dark:text-white">Last Name</span>}
              value={userData.lastname}
              icon={<FaRegUser className="size-4 dark:text-blue-400" />}
              readOnly
              className="dark:text-blue-400 focus:dark:border-blue-400"
            />
            <Input
              label={<span className="dark:text-white">E-mail</span>}
              value={userData.email}
              type={showInfo ? "text" : "password"}
              icon={<MdEmail className="size-4 dark:text-blue-400" />}
              readOnly
              className="dark:text-blue-400 focus:dark:border-blue-400"
            />
            <Input
              label={<span className="dark:text-white">Password</span>}
              value={userData.password}
              type={showInfo ? "text" : "password"}
              icon={
                <RiLockPasswordFill className="size-4 dark:text-blue-400" />
              }
              readOnly
              className="dark:text-blue-400 focus:dark:border-blue-400"
            />
            <Input
              label={<span className="dark:text-white">Birthday</span>}
              value={userData.birthday}
              type={showInfo ? "text" : "password"}
              icon={<FaBirthdayCake className="size-4 dark:text-blue-400" />}
              readOnly
              className="dark:text-blue-400 focus:dark:border-blue-400"
            />
            <div className="flex justify-evenly items-center">
              <span className="dark:text-blue-400">Gender :</span>
              <Radio
                name="type"
                label={<span className="dark:text-white">Male</span>}
                readOnly
                checked={userData.gender == "male" ? true : false}
                className="dark:bg-white"
                color="blue"
              />
              <Radio
                name="type"
                label={<span className="dark:text-white">Female</span>}
                readOnly
                checked={userData.gender == "female" ? true : false}
                className="dark:bg-white"
                color="blue"
              />
            </div>
          </div>
          <div className="flex justify-evenly items-center w-2/6 clg:w-1/2 cmd:w-2/3 csm:w-3/4 cxs:w-4/5">
            <Button
              onClick={() => {
                eShowInfo(!showInfo);
              }}
              className="w-28 px-0"
              color="green"
            >
              Show Info
            </Button>
            <Link to="/editprofile">
              <Button className="w-28 px-0 dark:text-maincolor dark:bg-backcolor">
                Edit Profile
              </Button>
            </Link>
          </div>
        </div>
      ) : localStorage.id != undefined && userData == undefined && !arrived ? (
        <div className="flex justify-center items-start h-svh">
          <Spinner className="h-12 w-12" />
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center gap-5 w-full h-svh">
          <div>Please sign in First</div>
          <Link to="/login">
            <Button>Go To Log in</Button>
          </Link>
        </div>
      )}
    </div>
  );
};


	useEffect(() => {
		axios
			.get(`${import.meta.env.VITE_API_URL_USERS}/${localStorage.id}`)
			.then(({ data }) => {
				setUserData(data)
				setFixedUserData(data)
				setArrived(true)

				setValue('firstName', data.firstName)
				setValue('lastName', data.lastName)
				setValue('email', data.email)
				setValue('password', data.password)
			})
			.catch(({ message }) => {
				console.log(message)
			})
	}, [setValue])

	return (
		<div className='dark:bg-gray-900 py-5'>
			{localStorage.id && userData && arrived ? (
				<div className='flex flex-col items-center gap-3'>
					<div>
						<img
							className='size-40 my-5'
							src={userData.gender === 'male' ? maleImage : femaleImage}
							alt='UserImage'
						/>
					</div>

					{/* Form Inputs */}
					<div className='flex flex-col gap-4 w-2/6 clg:w-1/2 cmd:w-2/3 csm:w-3/4 cxs:w-4/5'>
						<form onSubmit={handleSubmit(onSubmit)}>
							{/* First Name */}
							<div className='mb-4'>
								<span className='text-red-500'>
									{errors.firstName?.message}
								</span>
								<Input
									label={<span className='dark:text-white'>First Name</span>}
									{...register('firstName', {
										required: 'First name is required',
										validate: (value) => {
											const usernameRegex = /^[a-zA-Z0-9_]{3,16}$/
											return usernameRegex.test(value) || 'Invalid username'
										},
									})}
									icon={<FaRegUser className='size-4 dark:text-blue-400' />}
									readOnly={!editMode}
									className='dark:text-blue-400 focus:border-blue-400 mb-10'
								/>
							</div>

							{/* Last Name */}
							<div className='mb-4'>
								<span className='text-red-500'>{errors.lastName?.message}</span>
								<Input
									label={<span className='dark:text-white'>Last Name</span>}
									{...register('lastName', {
										required: 'Last name is required',
										validate: (value) => {
											const usernameRegex = /^[a-zA-Z0-9_]{3,16}$/
											return usernameRegex.test(value) || 'Invalid username'
										},
									})}
									icon={<FaRegUser className='size-4 dark:text-blue-400' />}
									readOnly={!editMode}
									className='dark:text-blue-400 focus:dark:border-blue-400'
								/>
							</div>

							{/* Email */}
							<div className='mb-4'>
								<span className='text-red-500'>{errors.email?.message}</span>
								<Input
									label={<span className='dark:text-white'>E-mail</span>}
									{...register('email', {
										required: 'Email is required',
										validate: (value) => {
											const emailRegex =
												/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
											return emailRegex.test(value) || 'Not valid Email'
										},
									})}
									type={showInfo ? 'text' : 'email'}
									icon={<MdEmail className='size-4 dark:text-blue-400' />}
									readOnly={!editMode}
									className='dark:text-blue-400 focus:dark:border-blue-400'
								/>
							</div>

							{/* Password */}
							<div className='mb-4'>
								<span className='text-red-500'>{errors.password?.message}</span>
								<Input
									label={<span className='dark:text-white'>Password</span>}
									{...register('password', {
										required: 'Password is required',
										minLength: {
											value: 8,
											message: 'Password must be at least 8 characters',
										},
									})}
									type={showInfo ? 'text' : 'password'}
									icon={
										<RiLockPasswordFill className='size-4 dark:text-blue-400' />
									}
									readOnly={!editMode}
									className='dark:text-blue-400 focus:dark:border-blue-400'
								/>
							</div>

							{/* Gender */}
							<div className='relative flex justify-evenly items-center'>
								<span className='dark:text-blue-400'>Gender :</span>
								<Radio
									name='gender'
									label={<span className='dark:text-white'>Male</span>}
									checked={userData.gender === 'male'}
									disabled={!editMode}
									onChange={() => setUserData({ ...userData, gender: 'male' })}
									className='dark:bg-white'
									color='blue'
								/>
								<Radio
									name='gender'
									label={<span className='dark:text-white'>Female</span>}
									checked={userData.gender === 'female'}
									disabled={!editMode}
									onChange={() =>
										setUserData({ ...userData, gender: 'female' })
									}
									className='dark:bg-white'
									color='blue'
								/>
							</div>
						</form>
					</div>

					{/* Buttons */}
					<div className='flex cxs:flex-col justify-evenly items-center cxs:gap-4 w-2/6 clg:w-1/2 cmd:w-2/3 csm:w-3/4 cxs:w-4/5'>
						<Button
							onClick={() => setShowInfo(!showInfo)}
							color='green'
							className='w-28 px-0 cxs:w-1/2'
						>
							Show Info
						</Button>
						<Button
							disabled={isSubmitting}
							onClick={() => {
								editMode ? handleSubmit(onSubmit)() : setEditMode(!editMode)
							}}
							color={editMode ? 'green' : 'black'}
							className='w-28 px-0 cxs:w-1/2 dark:bg-blue-400'
						>
							{editMode ? 'Confirm' : 'Edit Profile'}
						</Button>
						<Button
							onClick={() => {
								setEditMode(false)
								setUserData(fixedUserData)
							}}
							className={`w-28 px-0 bg-red-500 cxs:w-1/2 ${
								editMode ? 'block' : 'hidden'
							}`}
						>
							Cancel
						</Button>
					</div>
				</div>
			) : localStorage.id && !userData && !arrived ? (
				<div className='flex justify-center items-start h-svh'>
					<Spinner className='h-12 w-12' />
				</div>
			) : (
				<Link
					to='/register'
					className='text-white'
				>
					You have to register first
				</Link>
			)}
		</div>
	)
}

export default Profile

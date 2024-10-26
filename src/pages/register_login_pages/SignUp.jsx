import React, { useState } from "react";
import img1 from "../images/img_3.json";
import { Button, Checkbox, Input, Radio } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Lottie from "lottie-react";

const SignUp = ({ users }) => {
  console.log(users);

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phonenumber: "",
    confirmPassword: "",
    gender: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const updateUserInput = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    Object.keys(user).forEach((key) => {
      if (user[key] === "") {
        newErrors[key] = `${
          key.charAt(0).toUpperCase() + key.slice(1)
        } is required`;
      }
    });
    if (!emailRegex.test(user.email)) {
      newErrors.email = "not valid email";
    }
    if (user.password !== user.confirmPassword) {
      newErrors.confirmPassword = "Passwords don't match";
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const userInfo = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
      phonenumber: user.phonenumber,
      gender: user.gender,
      cart: [],
    };

    axios
      .post("https://booming-odd-lark.glitch.me/users", userInfo)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => console.error(error.message));
  };

  return (
    <div className="flex w-full h-screen dark:bg-[#050C9C]">
      <div className="hidden lg:flex ml-12 h-[full] item-center justify-center ">
        <Lottie animationData={img1} />
      </div>
      <div className="w-full lg:w-2/3 flex items-center justify-center bg-white dark:bg-[#050C9C]">
        <form
          onSubmit={handleOnSubmit}
          className="bg-white dark:bg-[#536493] shadow-xl px-10 py-10 rounded-3xl border-2"
        >
          <h1 className="flex dark:text-white justify-center text-3xl font-bold mb-10">
            Create New Account
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 justify-center w-full gap-6 lg:gap-9">
            <div>
              {errors.firstName && (
                <p className="text-red-500 dark:text-white font-bold mb-1">
                  {errors.firstName}
                </p>
              )}
              <Input
                className="dark:text-white "
                name="firstName"
                label="First Name"
                error={Boolean(errors.firstName)}
                value={user.firstName}
                onChange={updateUserInput}
              />
            </div>
            <div>
              {errors.lastName && (
                <p className="text-red-500 dark:text-white   font-bold mb-1 ">
                  {errors.lastName}
                </p>
              )}
              <Input
                className="dark:text-white "
                name="lastName"
                label="Last Name"
                error={Boolean(errors.lastName)}
                value={user.lastName}
                onChange={updateUserInput}
              />
            </div>
            <div>
              {errors.email && (
                <p className="text-red-500 dark:text-white  font-bold mb-1">
                  {errors.email}
                </p>
              )}
              <Input
                className="dark:text-white "
                name="email"
                label="Email"
                error={Boolean(errors.email)}
                value={user.email}
                onChange={updateUserInput}
              />
            </div>
            <div>
              {errors.phonenumber && (
                <p className="text-red-500 dark:text-white  font-bold mb-1">
                  {errors.phonenumber}
                </p>
              )}
              <Input
                className="dark:text-white "
                name="phonenumber"
                label="phone number"
                type="number"
                error={Boolean(errors.phonenumber)}
                value={user.phonenumber}
                onChange={updateUserInput}
              />
            </div>
            <div>
              {errors.password && (
                <p className="text-red-500 dark:text-white  font-bold mb-1">
                  {errors.password}
                </p>
              )}
              <Input
                className="dark:text-white "
                name="password"
                type={showPassword ? "text" : "password"}
                label="Password"
                error={Boolean(errors.password)}
                value={user.password}
                onChange={updateUserInput}
              />
            </div>
            <div>
              {errors.confirmPassword && (
                <p className="text-red-500 dark:text-white  font-bold mb-1">
                  {errors.confirmPassword}
                </p>
              )}
              <Input
                className="dark:text-white "
                name="confirmPassword"
                type={showPassword ? "text" : "password"}
                label="Confirm Password"
                error={Boolean(errors.confirmPassword)}
                value={user.confirmPassword}
                onChange={updateUserInput}
              />
            </div>
          </div>
          <div className=" flex items-center dark:text-white ">
            <Checkbox onChange={() => setShowPassword((prev) => !prev)} />
            Show Password'
          </div>
          <div className="flex items-center m-4 dark:text-white ">
            {errors.gender ? (
              <p className="text-red-500 dark:text-white  font-bold mb-1">
                {errors.gender}
              </p>
            ) : (
              "Gender"
            )}
            <Radio name="gender" value="male" onChange={updateUserInput} />
            male
            <Radio name="gender" value="female" onChange={updateUserInput} />
            female
          </div>

          <Button
            className="normal-case items-center text-lg text-center w-full"
            type="submit"
          >
            Create Account
          </Button>

          <p className="flex dark:text-white  items-center justify-center mt-5">
            Already have an account?
            <Link
              className="text-blue-800 dark:text-white   pl-1 hover:font-bold hover:-translate-y-0.5"
              to="/login"
            >
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

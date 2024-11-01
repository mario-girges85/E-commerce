import React, { useEffect, useState } from "react";
import img1 from "../images/img_3.json";
import { Button, Checkbox, Input, Radio } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Lottie from "lottie-react";

const SignUp = () => {
  const [userData, setuserData] = useState([]);
  const api_users = import.meta.env.VITE_API_URL_USERS;
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

    // Check for empty fields
    Object.keys(user).forEach((key) => {
      if (!user[key]) {
        newErrors[key] = `${
          key.charAt(0).toUpperCase() + key.slice(1)
        } is required`;
      }
    });

    // Check for email format
    if (user.email && !emailRegex.test(user.email)) {
      newErrors.email = "Invalid email format";
    }

    // Check for password match
    if (
      user.password &&
      user.confirmPassword &&
      user.password !== user.confirmPassword
    ) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    // If there are any errors, set them and return early
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Continue with user creation if there are no errors
    const userInfo = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
      phonenumber: user.phonenumber,
      gender: user.gender,
      cart: [],
      role: "admin",
    };

    const existingUser = userData.find(
      (existingUser) =>
        existingUser.email.toLowerCase() === user.email.toLowerCase()
    );

    if (existingUser) {
      alert("Email already exists, go to login");
      return;
    }

    axios
      .post(`${api_users}`, userInfo)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.error(error.message);
        console.log(userInfo);
      });
  };

  const checkTheUser = () => {
    axios
      .get(`${api_users}`)
      .then((res) => {
        setuserData(res.data);
      })
      .catch((err) => console.error(err.message));
  };

  useEffect(() => {
    checkTheUser();
  }, []);

  return (
    <div className="flex w-full mt-20 mb-20 h-screen dark:bg-[#050C9C]">
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

// import React, { useEffect, useState } from "react";
// import img1 from "../images/img_3.json";
// import { Button, Checkbox, Input, Radio } from "@material-tailwind/react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import Lottie from "lottie-react";

// const SignUp = () => {
//   const [userData, setuserData] = useState([]);

//   const [user, setUser] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     phonenumber: "",
//     confirmPassword: "",
//     gender: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();

//   const updateUserInput = (e) => {
//     const { name, value } = e.target;
//     setUser((prevUser) => ({
//       ...prevUser,
//       [name]: value,
//     }));
//   };

//   const handleOnSubmit = (e) => {
//     e.preventDefault();

//     const newErrors = {};
//     const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
//     Object.keys(user).forEach((key) => {
//       if (user[key] === "") {
//         newErrors[key] = `${
//           key.charAt(0).toUpperCase() + key.slice(1)
//         } is required`;
//       }
//     });
//     if (!emailRegex.test(user.email)) {
//       newErrors.email = "not valid email";
//     } else if (user.password !== user.confirmPassword) {
//       newErrors.confirmPassword = "Passwords don't match";
//     } else if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }
//     const userInfo = {
//       firstName: user.firstName,
//       lastName: user.lastName,
//       email: user.email,
//       password: user.password,
//       phonenumber: user.phonenumber,
//       gender: user.gender,
//       cart: [],
//     };
//     const existingUser =
//       userData &&
//       userData.find(
//         (existingUser) =>
//           existingUser.email.toLowerCase() === user.email.toLowerCase()
//       );

//     if (existingUser) {
//       alert("Email already exists, go to login");
//       return;
//     }
//     axios
//       .post(`${import.meta.env.VITE_API_URL_USERS}`, userInfo)
//       .then(() => {
//         navigate("/login");
//       })
//       .catch((error) => console.error(error.message));
//   };
//   const checkTheUser = () => {
//     axios({
//       method: "get",
//       url: `${import.meta.env.VITE_API_URL_USERS}`,
//     })
//       .then((res) => {
//         setuserData(res.data);
//       })
//       .catch((err) => console.error(err.message));
//   };

//   useEffect(() => {
//     checkTheUser();
//   }, []);

//   return (
//     <div className="flex w-full h-screen dark:bg-[#050C9C]">
//       <div className="hidden lg:flex ml-12 h-[full] item-center justify-center ">
//         <Lottie animationData={img1} />
//       </div>
//       <div className="w-full lg:w-2/3 flex items-center justify-center bg-white dark:bg-[#050C9C]">
//         <form
//           onSubmit={handleOnSubmit}
//           className="bg-white dark:bg-[#536493] shadow-xl px-10 py-10 rounded-3xl border-2"
//         >
//           <h1 className="flex dark:text-white justify-center text-3xl font-bold mb-10">
//             Create New Account
//           </h1>

//           <div className="grid grid-cols-1 lg:grid-cols-2 justify-center w-full gap-6 lg:gap-9">
//             <div>
//               {errors.firstName && (
//                 <p className="text-red-500 dark:text-white font-bold mb-1">
//                   {errors.firstName}
//                 </p>
//               )}
//               <Input
//                 className="dark:text-white "
//                 name="firstName"
//                 label="First Name"
//                 error={Boolean(errors.firstName)}
//                 value={user.firstName}
//                 onChange={updateUserInput}
//               />
//             </div>
//             <div>
//               {errors.lastName && (
//                 <p className="text-red-500 dark:text-white   font-bold mb-1 ">
//                   {errors.lastName}
//                 </p>
//               )}
//               <Input
//                 className="dark:text-white "
//                 name="lastName"
//                 label="Last Name"
//                 error={Boolean(errors.lastName)}
//                 value={user.lastName}
//                 onChange={updateUserInput}
//               />
//             </div>
//             <div>
//               {errors.email && (
//                 <p className="text-red-500 dark:text-white  font-bold mb-1">
//                   {errors.email}
//                 </p>
//               )}
//               <Input
//                 className="dark:text-white "
//                 name="email"
//                 label="Email"
//                 error={Boolean(errors.email)}
//                 value={user.email}
//                 onChange={updateUserInput}
//               />
//             </div>
//             <div>
//               {errors.phonenumber && (
//                 <p className="text-red-500 dark:text-white  font-bold mb-1">
//                   {errors.phonenumber}
//                 </p>
//               )}
//               <Input
//                 className="dark:text-white "
//                 name="phonenumber"
//                 label="phone number"
//                 type="number"
//                 error={Boolean(errors.phonenumber)}
//                 value={user.phonenumber}
//                 onChange={updateUserInput}
//               />
//             </div>
//             <div>
//               {errors.password && (
//                 <p className="text-red-500 dark:text-white  font-bold mb-1">
//                   {errors.password}
//                 </p>
//               )}
//               <Input
//                 className="dark:text-white "
//                 name="password"
//                 type={showPassword ? "text" : "password"}
//                 label="Password"
//                 error={Boolean(errors.password)}
//                 value={user.password}
//                 onChange={updateUserInput}
//               />
//             </div>
//             <div>
//               {errors.confirmPassword && (
//                 <p className="text-red-500 dark:text-white  font-bold mb-1">
//                   {errors.confirmPassword}
//                 </p>
//               )}
//               <Input
//                 className="dark:text-white "
//                 name="confirmPassword"
//                 type={showPassword ? "text" : "password"}
//                 label="Confirm Password"
//                 error={Boolean(errors.confirmPassword)}
//                 value={user.confirmPassword}
//                 onChange={updateUserInput}
//               />
//             </div>
//           </div>
//           <div className=" flex items-center dark:text-white ">
//             <Checkbox onChange={() => setShowPassword((prev) => !prev)} />
//             Show Password'
//           </div>
//           <div className="flex items-center m-4 dark:text-white ">
//             {errors.gender ? (
//               <p className="text-red-500 dark:text-white  font-bold mb-1">
//                 {errors.gender}
//               </p>
//             ) : (
//               "Gender"
//             )}
//             <Radio name="gender" value="male" onChange={updateUserInput} />
//             male
//             <Radio name="gender" value="female" onChange={updateUserInput} />
//             female
//           </div>

//           <Button
//             className="normal-case items-center text-lg text-center w-full"
//             type="submit"
//           >
//             Create Account
//           </Button>

//           <p className="flex dark:text-white  items-center justify-center mt-5">
//             Already have an account?
//             <Link
//               className="text-blue-800 dark:text-white   pl-1 hover:font-bold hover:-translate-y-0.5"
//               to="/login"
//             >
//               Log in
//             </Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;

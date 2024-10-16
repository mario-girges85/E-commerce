// import React from "react";
// import ProfileMenuItems from "./navComponent/ProfileMenuItems";
// import NavListItems from "./navComponent/NavListItems";
// import Logo from "./navComponent/Logo";
// import DarkMood from "./navComponent/DarkMood";

// const Nav = () => {
//   return (
//     // <div className="flex flex-col content-center  rounded-3xl  my-2 py-1  shadow-2xl shadow-blue-gray-500 md:flex-row justify-evenly  dark:bg-black dark:shadow-light-green-600 ">
//     <div className="fixed top-0 left-0 w-full flex flex-col content-center rounded-3xl my-2 py-1 shadow-2xl shadow-blue-gray-500 bg-white  bg-opacity-90 md:flex-row justify-evenly z-50 dark:bg-black dark:shadow-light-green-600"> //fixed nanbar

//       <Logo />
//       <NavListItems />
//       <DarkMood />
//       <ProfileMenuItems />
//     </div>
//   );
// };
// export default Nav;

// //customed all components
// import React, { useState } from "react";
// import ProfileMenuItems from "./navComponent/ProfileMenuItems";
// import NavListItems from "./navComponent/NavListItems";
// import Logo from "./navComponent/Logo";
// import DarkMood from "./navComponent/DarkMood";

// const Nav = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div className="fixed top-0 left-0 w-full flex flex-col md:flex-row content-center rounded-3xl my-2 py-1 shadow-2xl shadow-blue-gray-500 bg-white bg-opacity-90 justify-between z-50 dark:bg-black dark:shadow-light-green-600">
//       <div className="flex justify-between items-center w-full md:w-auto">
//         <Logo />

//         {/* Burger Menu Button */}
//         <button
//           className="text-gray-800 dark:text-white block md:hidden focus:outline-none" //icon customization
//           onClick={toggleMenu}
//         >
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M4 6h16M4 12h16m-7 6h7"
//             />
//           </svg>
//         </button>
//       </div>

//       {/* Menu Items - Hidden on mobile, shown when menu is toggled */}
//       <div
//         className={`${
//           isMenuOpen ? "block" : "hidden"
//         } md:flex md:items-center md:w-auto w-full`}
//       >
//         <NavListItems />
//         <DarkMood />
//         <ProfileMenuItems />
//       </div>
//     </div>
//   );
// };

// export default Nav;

// customed small screens
import React, { useState } from "react";
import ProfileMenuItems from "./ProfileMenuItems";
import NavListItems from "./NavListItems";
import Logo from "./Logo";
import DarkMood from "./DarkMood";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="md:mx-10 mx-2  flex flex-col rounded-xl md:flex-row content-center md:rounded-2xl  py-1 shadow-md shadow-blue-gray-500 bg-white bg-opacity-90 justify-between z-50 dark:bg-backcolor dark:bg-opacity-98 dark:shadow-maincolor">
      {/* Logo is always displayed */}
      <div className="flex justify-between items-center w-full md:w-auto">
        <Logo />

        {/* Burger Menu Button (Only visible on mobile) */}
        <button
          className="text-gray-800 mr-3 dark:text-white block md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Menu Items - Hidden on mobile, displayed when the menu is toggled */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:flex md:items-center md: w-full`}
      >
        <NavListItems />
        <DarkMood />
        <ProfileMenuItems />
      </div>
    </div>
  );
};

export default Nav;

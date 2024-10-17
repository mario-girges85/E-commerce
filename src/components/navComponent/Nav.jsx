import { Route, Routes, Link } from "react-router-dom";
import React, { useState } from "react";
import ProfileMenuItems from "./ProfileMenuItems";
import NavListItems from "./NavListItems";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { Typography, Button } from "@material-tailwind/react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log(localStorage.ud);

  return (
    <div className=" items-center z-50 relative py-4  flex-col flex-nowrap flex md:flex-row     px-6 shadow-md shadow-blue-gray-500 bg-white bg-opacity-90 justify-between  dark:bg-backcolor dark:bg-opacity-98 ">
      {/* Menu Items - Hidden on mobile, displayed when the menu is toggled */}
      <div
        className={` ${
          isMenuOpen ? "block" : "hidden"
        } md:flex md:items-center  min-w-[fit]  `}
      >
        <NavListItems isMenuOpen={isMenuOpen} />
      </div>

      {/* Logo is always displayed and burger */}
      <div className="flex justify-between  md:justify-around   items-center   ">
        <h1 className="text-blue-gray-500  dark:text-white font-semibold text-2xl">
          Little Closet
        </h1>
        <div>
          {/* Burger Menu Button (Only visible on mobile) */}

          <Bars3Icon
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            class="h-10 w-10  text-gray-800 mr-3 dark:text-white block md:hidden focus:outline-none"
          />
        </div>
      </div>

      {/* avatar */}
      <div>
        {localStorage.ud == undefined ? (
          // <Button>log in</Button>
          <Link
            className="text-2xl font-semibold dark:text-white dark:bg-maincolor bg-blue-gray-500 text-white rounded-lg p-2 m-2 "
            to="/login"
          >
            Login
          </Link>
        ) : (
          <ProfileMenuItems />
        )}
      </div>
    </div>
  );
};

export default Nav;

import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import ProfileMenuItems from "./ProfileMenuItems";
import NavListItems from "./NavListItems";
import { Bars3Icon } from "@heroicons/react/24/outline";

import DarkMood from "./DarkMood";
import { Typography, Link, Button } from "@material-tailwind/react";
const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className=" items-center  flex md:flex-row md:justify-between  content-center  px-6  py-1 shadow-md shadow-blue-gray-500 bg-white bg-opacity-90 justify-between  dark:bg-backcolor dark:bg-opacity-98 ">
      {/* Logo is always displayed and burger */}
      <div className="flex w-full  md:w-[10%] justify-between md:justify-around   items-center   ">
        <h1 className="text-blue-gray-500 dark:text-maincolor font-semibold text-2xl">
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

      {/* Menu Items - Hidden on mobile, displayed when the menu is toggled */}
      <div
        className={` ${
          isMenuOpen ? "block" : "hidden"
        } md:flex md:items-center  min-w-[fit]  `}
      >
        <NavListItems isMenuOpen={isMenuOpen} />
      </div>

      {/* avatar */}
      <ProfileMenuItems />
    </div>
  );
};

export default Nav;

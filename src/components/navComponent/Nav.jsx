import { Route, Routes, Link } from "react-router-dom";
import React, { useState } from "react";
import ProfileMenuItems from "./ProfileMenuItems";
import NavListItems from "./NavListItems";
import { Bars3Icon } from "@heroicons/react/24/outline";

import DarkMood from "./DarkMood";
import { Typography, Button } from "@material-tailwind/react";
const Nav = ({ cn, userdata }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex justify-around items-center h-fit gap-5 py-2 shadow-none shadow-blue-gray-500 bg-white bg-opacity-90 dark:bg-backcolor dark:bg-opacity-98 ">
      {/* Menu Items - Hidden on mobile, displayed when the menu is toggled */}
      <div className="flex justify-around items-center gap-[5vw] cxs:gap-0 csm:gap-0 cmd:gap-0 cxl:gap-[15vw] c2xl:gap-[15vw] cxs:flex-col csm:flex-col cmd:flex-col">
        <h1 className="flex gap-5 text-blue-gray-500 dark:text-maincolor font-semibold text-2xl">
          <Bars3Icon
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            class="size-8 text-gray-800 dark:text-white block clg:hidden cxl:hidden c2xl:hidden focus:outline-none"
          />
          Little Closet
        </h1>
        <div
          className={`w-fit  md:flex md:items-center  min-w-[fit]  ${
            isMenuOpen ? "flex" : "hidden"
          }`}
        >
          <NavListItems userdata={userdata} isMenuOpen={isMenuOpen} />
        </div>
      </div>
      {/* avatar */}
      <div className={`${isMenuOpen && "self-start"}`}>
        {!cn ? (
          <Link
            className="text-2xl font-semibold dark:text-white dark:bg-maincolor bg-blue-gray-500 text-white rounded-lg p-2 m-2 "
            to="/login"
          >
            Login
          </Link>
        ) : (
          <div className={`${isMenuOpen ? "h-60" : "h-fit"}`}>
            <ProfileMenuItems className="fit " />
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;

import { Typography, MenuItem } from "@material-tailwind/react";
import {
  ShoppingBagIcon,
  HomeIcon,
  MoonIcon,
  SunIcon,
  ClipboardDocumentListIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";
const NavListItems = () => {
  const navListItems = [
    {
      label: "Home",
      icon: HomeIcon,
      url: "/",
    },
    {
      label: "Products",
      icon: ShoppingBagIcon,
      url: "/products",
    },
    {
      label: "Cart",
      icon: ShoppingCartIcon,
      url: "/cart",
    },
    // {
    //   label: "Dashboard",
    //   icon: ClipboardDocumentListIcon,
    //   url: "/dashboard",
    // },
  ];
  return (
    <ul className="mt-2 mb-4 flex flex-col items-center  gap-2  md:mb-0 md:mt-0 md:flex-row lg:items-center ">
      {navListItems.map(({ label, icon, url }, key) => (
        <Typography
          key={label}
          as={Link}
          to={url}
          variant="small"
          color="gray"
          className="font-medium text-blue-gray-500 dark:text-maincolor"
        >
          <MenuItem className="flex items-center gap-2 lg:rounded-full">
            {React.createElement(icon, { className: "h-[18px] w-[18px] " })}{" "}
            <span className="text-gray-900 content-baseline dark:text-white">
              {" "}
              {label}
            </span>
          </MenuItem>
        </Typography>
      ))}
      <Dashboard />
    </ul>
  );
};

export default NavListItems;

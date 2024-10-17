import {
  MenuHandler,
  Typography,
  MenuItem,
  MenuList,
  Menu,
  Button,
} from "@material-tailwind/react";
import {
  ShoppingBagIcon,
  HomeIcon,
  MoonIcon,
  SunIcon,
  ClipboardDocumentListIcon,
  ShoppingCartIcon,
  ChartBarSquareIcon,
} from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import DarkMood from "./DarkMood";
const NavListItems = ({ isMenuOpen }) => {
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
    {
      label: "Dashboard",
      icon: ClipboardDocumentListIcon,
      url: "/dashboard",
    },
  ];
  return (
    <ul className="mt-2 mb-4 flex flex-col items-center justify-center gap-2  md:mb-0 md:mt-0 md:flex-row lg:items-center ">
      {/*Home */}
      <Typography
        key={navListItems[0].label}
        as={Link}
        to={navListItems[0].url}
        variant="small"
        color="gray"
        className="font-medium text-blue-gray-500 dark:text-maincolor"
      >
        <MenuItem className="flex items-center gap-2 lg:rounded-full">
          {React.createElement(navListItems[0].icon, {
            className: "h-[18px] w-[18px] ",
          })}{" "}
          <span className="text-gray-900 content-baseline dark:text-white">
            {" "}
            {navListItems[0].label}
          </span>
        </MenuItem>
      </Typography>

      {/*products */}
      <Typography
        key={navListItems[1].label}
        as={Link}
        to={navListItems[1].url}
        variant="small"
        color="gray"
        className="font-medium text-blue-gray-500 dark:text-maincolor"
      >
        <MenuItem className="flex items-center gap-2 lg:rounded-full">
          {React.createElement(navListItems[1].icon, {
            className: "h-[18px] w-[18px] ",
          })}{" "}
          <span className="text-gray-900 content-baseline dark:text-white">
            {" "}
            {navListItems[1].label}
          </span>
        </MenuItem>
      </Typography>

      {/*cart */}
      <Typography
        key={navListItems[2].label}
        as={Link}
        to={navListItems[2].url}
        variant="small"
        color="gray"
        className="font-medium  text-blue-gray-500 dark:text-maincolor"
      >
        <MenuItem className="flex items-center gap-2 lg:rounded-full">
          {React.createElement(navListItems[2].icon, {
            className: "h-[18px] w-[18px] ",
          })}{" "}
          <span className="text-gray-900 content-baseline dark:text-white">
            {" "}
            {navListItems[2].label}
          </span>
        </MenuItem>
      </Typography>

      {/*dash board*/}
      <Typography
        key={navListItems[3].label}
        as={Link}
        variant="small"
        color="gray"
        className="font-medium w-fit text-blue-gray-500 dark:text-maincolor"
      >
        <Menu>
          <MenuItem className="flex items-center gap-2 lg:rounded-full">
            {React.createElement(navListItems[3].icon, {
              className:
                "h-[18px] w-[18px] dark:bg-backcolor justify-between items-center gap-2 text-blue-gray-500 dark:text-maincolor",
            })}{" "}
            <MenuHandler className="text-black dark:text-white">
              <Link className="">Dashboard</Link>
            </MenuHandler>
            <MenuList className="bg-white flex flex-col dark:bg-backcolor justify-between items-center gap-2 text-blue-gray-500 dark:text-white">
              <MenuItem className="hover:bg-white ">
                <Link to="/admin/dashboard/products">Products</Link>
              </MenuItem>
              <MenuItem className="hover:bg-white">
                <Link to="/admin/dashboard/users">Users</Link>
              </MenuItem>
            </MenuList>
          </MenuItem>
        </Menu>
      </Typography>
      {/* dark mood */}
      {<DarkMood />}
    </ul>
  );
};

export default NavListItems;

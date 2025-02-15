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
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DarkMood from "./DarkMood";
const NavListItems = ({ isMenuOpen, userdata }) => {
  const [role, setrole] = useState(null);
  useEffect(() => {
    if (userdata != null) {
      setrole(userdata.role);
    }
  }),
    [userdata];

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
    <ul className="flex items-center justify-start cmd:flex-col csm:flex-col cxs:flex-col gap-2 lg:items-center ">
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
      {role == "admin" && (
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
              <MenuList className="bg-white flex flex-col dark:bg-backcolor justify-between items-center gap-2 text-blue-gray-800 dark:text-maincolor">
                <Link
                  to="/admin/dashboard/products"
                  className="outline-none w-full"
                >
                  <MenuItem className="hover:bg-white dark:hover:bg-backcolor dark:hover:text-maincolor text-center">
                    Products
                  </MenuItem>
                </Link>
                <Link
                  to="/admin/dashboard/users"
                  className="outline-none w-full"
                >
                  <MenuItem className="hover:bg-white dark:hover:bg-backcolor dark:hover:text-maincolor text-center">
                    Users
                  </MenuItem>
                </Link>
              </MenuList>
            </MenuItem>
          </Menu>
        </Typography>
      )}

      {/* dark mood */}
      {<DarkMood />}
    </ul>
  );
};

export default NavListItems;

import React from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Badge,
} from "@material-tailwind/react";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
export const Dashboard = () => {
  return (
    <div className="flex flex-row items-center gap-2 lg:rounded-full">
      <Menu className="text-gray-900 content-baseline dark:text-white">
        {React.createElement(ShoppingCartIcon, {
          className:
            "h-[18px] w-[18px] font-medium text-blue-gray-500 dark:text-maincolor ",
        })}{" "}
        <MenuHandler>
          <Link className="text-gray-900 content-baseline dark:text-white">
            Dashboard
          </Link>
        </MenuHandler>
        <MenuList className="bg-white flex flex-col dark:bg-backcolor justify-between items-center gap-2 text-blue-gray-500 dark:text-maincolor">
          <MenuItem className="hover:bg-white ">
            <Link to="/admin/dashboard/products">Products</Link>
          </MenuItem>
          <MenuItem className="hover:bg-white">
            <Link to="/admin/dashboard/users">Users</Link>
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default Dashboard;

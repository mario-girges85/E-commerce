import React from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Badge,
} from "@material-tailwind/react";

export const Dashboard = () => {
  return (
    <div>
      <Menu>
        <MenuHandler>
          <Link>Dashboard</Link>
        </MenuHandler>
        <MenuList className="bg-white flex flex-col justify-between items-center gap-2">
          <Link
            to="/admin/dashboard/orders"
            className="w-full outline-none flex items-center"
          >
            <MenuItem className="hover:bg-white text-center flex justify-center gap-3">
              Orders
            </MenuItem>
          </Link>
          <Link
            to="/admin/dashboard/products"
            className="w-full outline-none flex items-center"
          >
            <MenuItem className="hover:bg-white text-center">Products</MenuItem>
          </Link>
          <Link
            to="/admin/dashboard/users"
            className="w-full outline-none flex items-center"
          >
            <MenuItem className="hover:bg-white text-center">Users</MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </div>
  );
};

export default Dashboard;

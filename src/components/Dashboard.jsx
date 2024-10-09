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
          <MenuItem className="hover:bg-white">
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

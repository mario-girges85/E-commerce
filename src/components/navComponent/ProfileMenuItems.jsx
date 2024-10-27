import React from "react";
import {
  Avatar,
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from "@material-tailwind/react";
import {
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import { Link, useNavigate } from "react-router-dom";

export function AvatarWithUserDropdown() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center rounded-full p-0"
        >
          <Avatar
            variant="circular"
            size="md"
            alt="tania andrew"
            withBorder={true}
            color="blue-gray"
            className=" p-0.5 min-w-12 min-h-12"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPQzg2-modiBeSBIckt_NcpipPPGQfZA_dbQ&s"
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        <Typography
          as={Link}
          to="/profile"
          variant="small"
          className="font-normal"
          color={"inherit"}
        >
          <MenuItem
            onClick={closeMenu}
            key="Profile"
            className="flex items-center gap-2 rounded "
          >
            {React.createElement(UserCircleIcon, {
              className: `h-4 w-4 `,
              strokeWidth: 2,
            })}
            profile
          </MenuItem>
        </Typography>
        <Typography
          as={Link}
          to=""
          variant="small"
          className="font-normal"
          color={"red"}
          onClick={() => {
            localStorage.clear();
            location.reload();
          }}
        >
          <MenuItem
            onClick={closeMenu}
            key="Profile"
            className="flex items-center gap-2 rounded hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
          >
            {React.createElement(PowerIcon, {
              className: `h-4 w-4 text-red-500`,
              strokeWidth: 2,
            })}
            Sign out
          </MenuItem>
        </Typography>
      </MenuList>
    </Menu>
  );
}
export default AvatarWithUserDropdown;

import React from "react";
import { Button, IconButton } from "@material-tailwind/react";

const User = ({
  user: { _id, firstName, lastName, email, role },
  handleDeleteUser,
  handleRoleChange,
}) => {
  return (
    <tr
      key={_id}
      className="border-b text-center dark:bg-backcolor dark:text-maincolor"
    >
      <td scope="col" className="py-2 lg:py-3 px-1">{(firstName + lastName).substring(0, 6)}</td>
      <td scope="col" className="py-2 lg:py-3 px-1">
        {email.length > 7 ? email.substring(0, 7) : email}
      </td>
      <td scope="col" className="py-2 lg:py-3 px-1">{role}</td>
      <td scope="col" className="py-2 lg:py-3 px-1 flex flex-col items-center lg:flex-row lg:justify-evenly gap-1">
        {role === "admin" ? (
          <Button color="green" className="" onClick={() => handleRoleChange(_id, "user")}>
            Make User
          </Button>
        ) : (
          <Button color="blue" className="" onClick={() => handleRoleChange(_id, "admin")}>
            Make Admin
          </Button>
        )}
        <IconButton
          color="red"
          variant="text"
          onClick={() => handleDeleteUser(_id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
              clipRule="evenodd"
            />
          </svg>
        </IconButton>
      </td>
    </tr>
  );
};

export default User;

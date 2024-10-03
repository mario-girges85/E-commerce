import React from "react";
import { Button } from "@material-tailwind/react";

const User = ({ user, handleDeleteUser, handleRoleChange }) => {
  return (
    <tr className="border-b border-gray-200 text-center">
      <td className="py-3">{user.firstName + user.lastName}</td>
      <td className="py-3">{user.email}</td>
      <td className="py-3">{user.role}</td>
      <td className="py-3 px-3 flex flex-col lg:flex-row justify-center gap-y-1">
        {user.role === "admin" ? (
          <Button
            className="mx-1"
            color="green"
            onClick={() => handleRoleChange(user.id, "user")}
          >
            Make User
          </Button>
        ) : (
          <Button
            className="mx-1"
            color="blue"
            onClick={() => handleRoleChange(user.id, "admin")}
          >
            Make Admin
          </Button>
        )}
        <Button
          className="mx-1"
          color="red"
          onClick={() => handleDeleteUser(user.id)}
        >
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default User;

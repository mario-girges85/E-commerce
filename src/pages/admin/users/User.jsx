import React from "react";
import { Button } from "@material-tailwind/react";

const User = ({
  user: { id, firstName, lastName, email, role },
  handleDeleteUser,
  handleRoleChange,
}) => {
  return (
    <tr key={id} className="border-b border-gray-200 text-center">
      <td className="py-3">{firstName + lastName}</td>
      <td className="py-3">
        {email.length >= 10 ? email.substring(0, 10) : email}
      </td>
      <td className="py-3">{role}</td>
      <td className="py-3 px-3 flex flex-col lg:flex-row justify-center gap-y-1">
        {role === "admin" ? (
          <Button
            className="mx-1"
            color="green"
            onClick={() => handleRoleChange(id, "user")}
          >
            Make User
          </Button>
        ) : (
          <Button
            className="mx-1"
            color="blue"
            onClick={() => handleRoleChange(id, "admin")}
          >
            Make Admin
          </Button>
        )}
        <Button
          className="mx-1"
          color="red"
          onClick={() => handleDeleteUser(id)}
        >
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default User;

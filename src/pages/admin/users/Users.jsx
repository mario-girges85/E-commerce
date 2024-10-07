import React, { useState } from "react";
import { Input } from "@material-tailwind/react";
import Swal from "sweetalert2";
import axios from "axios";
import User from "./User";

const Users = ({ users, setUsers }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredUsers = users.filter((user) =>
    user?.firstName?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDeleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://booming-odd-lark.glitch.me/users/${id}`)
          .then(() => {
            setUsers(users.filter((user) => user.id !== id));
            Swal.fire({
              title: "Deleted",
              text: "User has been deleted.",
              icon: "success",
            });
          })
          .catch((error) => {
            console.error("Error deleting user:", error);
            Swal.fire({
              title: "Error",
              text: "There was an error deleting the user.",
              icon: "error",
            });
          });
      }
    });
  };

  const handleRoleChange = (id, role) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You are going to change the role",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, change it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .patch(`https://booming-odd-lark.glitch.me/users/${id}`, {
            role,
          })
          .then((response) => {
            setUsers(
              users.map((user) => (user.id === id ? response.data : user))
            );
            Swal.fire({
              title: "Changed",
              text: "The role has been changed.",
              icon: "success",
            });
          })
          .catch((error) => {
            console.error("Error changing role:", error);
            Swal.fire({
              title: "Error",
              text: "There was an error changing the role.",
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <div className="container mx-auto p-4 my-5 md:p-6 lg:p-8 xl:p-10">
      <div className="w-[90%] mx-auto flex flex-col md:flex-row md:justify-between items-center mb-8 mt-5 md:mb-10 md:mt-8 lg:mb-15">
        <h1 className="text-3xl font-bold text-center mb-5 md:mb-0">
          User Dashboard
        </h1>
        <div className="w-full md:w-2/5">
          <Input
            color="blue"
            label="Search By Name..."
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            className="w-full"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap justify-evenly items-center mb-4 md:mb-0 md:mt-2">
        <div className="flex flex-wrap justify-evenly items-center gap-5 w-full lg:w-2/3 my-2">
          <div className="w-1/5 md:w-1/4 xl:w-1/5 mb-4 md:mb-6 lg:mb-8 text-center">
            <p className="text-lg">
              Total:{" "}
              <span className="bg-indigo-500 text-white px-4 p-1 rounded-full text-base">
                {users.length}
              </span>
            </p>
          </div>
          <div className="w-1/5 md:w-1/4 xl:w-1/5 mb-4 md:mb-6 lg:mb-8 text-center">
            <p className="text-lg">
              Admins:{" "}
              <span className="bg-indigo-500 text-white px-4 p-1 rounded-full text-base">
                {users.filter((user) => user.role === "admin").length}
              </span>
            </p>
          </div>
          <div className="w-1/5 md:w-1/4 xl:w-1/5 mb-4 md:mb-6 lg:mb-8 text-center">
            <p className="text-lg">
              Users:{" "}
              <span className="bg-indigo-500 text-white px-4 p-1 rounded-full text-base">
                {users.filter((user) => user.role === "user").length}
              </span>
            </p>
          </div>
        </div>
      </div>
      {users.length > 0 ? (
        <table className="w-full mx-auto bg-white rounded-lg shadow-md">
          <thead className="bg-gray-100">
            <tr className="text-gray-600 w-screen">
              <th className="py-3 w-1/6">Name</th>
              <th className="py-3 w-1/6">Email</th>
              <th className="py-3 w-1/6">Role</th>
              <th className="py-3 w-1/6">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <User
                key={user.id}
                user={user}
                handleDeleteUser={handleDeleteUser}
                handleRoleChange={handleRoleChange}
              />
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center text-gray-500">No users found.</p>
      )}
    </div>
  );
};

export default Users;

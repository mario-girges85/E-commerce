import React, { useState, useEffect } from "react";
import { Input } from "@material-tailwind/react";
import Swal from "sweetalert2";
import axios from "axios";
import User from "./User";

const Users = ({ users, setUsers }) => {
  const [searchQuery, setSearchQuery] = useState("");
//   const filteredUsers = users.filter((user) =>
  const [usersData, setUsersData] = useState(users);

  useEffect(() => {
    if (usersData) {
      setUsers(usersData.map((user) => ({ ...user, id: user._id })));
    }
  }, [usersData]);


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
          .delete(`${import.meta.env.VITE_API_URL_USERS}/${id}`)
          .then(() => {
            setUsers(users.filter((user) => user._id !== id));
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
          .put(`${import.meta.env.VITE_API_URL_USERS}/${id}`, {
            role,
          })
          .then((response) => {
            setUsers(
              users.map((user) => (user._id === id ? response.data : user))
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
    <div className="container mx-auto py-3 px-4 md:p-6 lg:p-8">
      <div className="flex flex-col md:flex-row md:justify-between items-center mb-6 mt-5 md:mb-10 md:mt-8 lg:mb-10">
        <h1 className="text-3xl font-bold text-center mb-5 md:mb-0">
          Users Managment
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
      <div className="flex flex-col md:flex-row flex-wrap justify-evenly items-center mb-2 md:mb-0">
        <div className="flex flex-col md:flex-row justify-evenly items-center gap-2 w-full md:w-2/3 mb-2">
          <div className="w-full md:w-1/3 xl:w-1/5 mb-2 md:mb-6 lg:mb-8 text-center">
            <p className="text-lg">
              <span className="dark:text-maincolor px-3 text-base">
                Total{" "}
                <span className="text-white bg-backcolor dark:text-backcolor dark:bg-maincolor rounded-full py-1 px-2">
                  {users?.length}
                </span>
              </span>
            </p>
          </div>
          <div className="w-full md:w-2/3 flex justify-evenly">
            <div className="w-full md:w-1/3 xl:w-1/5 mb-2 md:mb-6 lg:mb-8 text-center">
              <p className="text-lg">
                <span className="dark:text-maincolor px-3 text-base">
                  Admins{" "}
                  <span className="text-white bg-backcolor dark:text-backcolor dark:bg-maincolor rounded-full py-1 px-2">
                    {users?.filter((user) => user.role === "admin").length}
                  </span>
                </span>
              </p>
            </div>
            <div className="w-full md:w-1/3 xl:w-1/5 md:mb-6 lg:mb-8 text-center">
              <p className="text-lg">
                <span className="dark:text-maincolor px-3 text-base">
                  Users{" "}
                  <span className="text-white bg-backcolor dark:text-backcolor dark:bg-maincolor rounded-full py-1 px-2">
                    {users?.filter((user) => user.role === "user").length}
                  </span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {users?.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full mx-auto rounded-lg">
            <thead className="dark:bg-backcolor dark:text-maincolor">
              <tr className="text-gray-600">
                <th scope="col" className="py-3 w-1/6">
                  Name
                </th>
                <th scope="col" className="py-3 w-1/6">
                  Email
                </th>
                <th scope="col" className="py-3 w-1/6">
                  Role
                </th>
                <th scope="col" className="py-3 w-1/6">
                  Actions
                </th>
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
        </div>
      ) : (
        <p className="text-center text-gray-500">No users found.</p>
      )}
    </div>
  );
};

export default Users;

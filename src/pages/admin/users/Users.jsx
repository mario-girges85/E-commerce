import React, { useState, useEffect } from "react";
import { Input } from "@material-tailwind/react";
import Swal from "sweetalert2";
import axios from "axios";
import User from "./User";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios
      .get("https://capable-scrawny-principal.glitch.me/users")
      .then((response) => setUsers(response.data));
  };

  const handleSearch = (event) => {
    const search = event.target.value;
    setSearchQuery(search);
    axios
      .get(`https://capable-scrawny-principal.glitch.me/users?q=${search}`)
      .then((response) => setUsers(response.data));
  };

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
          .delete(`https://capable-scrawny-principal.glitch.me/users/${id}`)
          .then(() => {
            setUsers(users.filter((user) => user.id !== id));
            Swal.fire({
              title: "Deleted",
              text: "User has been deleted.",
              icon: "success",
            });
          })
          .catch((error) => {
            console.error(error);
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
          .patch(`https://capable-scrawny-principal.glitch.me/users/${id}`, {
            role,
          })
          .then((response) => {
            setUsers(
              users.map((user) => (user.id === id ? response.data : user))
            );
            Swal.fire({
              title: "Changed",
              text: "the role has been changed.",
              icon: "success",
            });
          });
      }
    });
  };

  return (
    <div className="container mx-auto p-4 my-5 md:p-6 lg:p-8 xl:p-10">
      <h1 className="text-3xl font-bold text-center mb-5 md:mb-10 lg:mb-15">
        User Dashboard
      </h1>
      <div className="flex flex-wrap justify-center mb-4 md:mb-6 lg:mb-8">
        <div className="w-full md:w-1/2 mb-4 md:mb-6 lg:mb-8">
          <Input
            color="blue"
            label="Search By Name..."
            value={searchQuery}
            onChange={handleSearch}
            className="w-full"
          />
        </div>
      </div>
      <div className="flex flex-row justify-evenly items-center mb-2 gap-5 w-full">
        <div className="md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 md:mb-6 lg:mb-8 text-center">
          <p className="text-lg">
            Total:{" "}
            <span className="bg-indigo-500 text-white px-4 p-1 rounded-full text-base">
              {users.length}
            </span>
          </p>
        </div>
        <div className="md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 md:mb-6 lg:mb-8 text-center">
          <p className="text-lg">
            Admins:{" "}
            <span className="bg-indigo-500 text-white px-4 p-1 rounded-full text-base">
              {users.filter((user) => user.role === "admin").length}
            </span>
          </p>
        </div>
        <div className="md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 md:mb-6 lg:mb-8 text-center">
          <p className="text-lg">
            Users:{" "}
            <span className="bg-indigo-500 text-white px-4 p-1 rounded-full text-base">
              {users.filter((user) => user.role === "user").length}
            </span>
          </p>
        </div>
      </div>
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
          {users.map((user) => (
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
  );
};

export default Users;

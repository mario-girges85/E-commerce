import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Input } from "@material-tailwind/react";
import axios from "axios";
import Product from "./Product";
import Swal from "sweetalert2";

const Products = ({ products, setProducts }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const deleteProduct = (id) => {
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
          .delete(`https://capable-scrawny-principal.glitch.me/products/${id}`)
          .then(() => {
            setProducts(products.filter((product) => product.id !== id));
          })
          .catch((error) => {
            console.error(error);
          });
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="container mx-auto p-4 my-5 md:p-6 lg:p-8 xl:p-10">
      <h1 className="text-3xl font-bold text-center mb-5 md:mb-10 lg:mb-15">
        Products Management
      </h1>
      <div className="flex flex-wrap justify-center mb-4 md:mb-6 lg:mb-8">
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 md:mb-6 lg:mb-8">
          <Input
            color="blue"
            label="Search By Name..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full"
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 md:mb-6 lg:mb-8 text-center">
          <Link to="/admin/dashboard/products/add">
            <Button color="green" className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
              Add
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex flex-wrap justify-center mb-4 md:mb-6 lg:mb-8">
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 md:mb-6 lg:mb-8 text-center">
          <p className="text-lg">
            Count:{" "}
            <span className="bg-indigo-500 text-white px-4 p-1 rounded-full text-base">
              {products.length}
            </span>
          </p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 md:mb-6 lg:mb-8 text-center">
          <p className="text-lg">
            Last added:{" "}
            <span className="bg-indigo-500 text-white px-4 p-1 rounded-full text-base">
              {products[products.length - 1]?.name.substring(0, 10)}
            </span>
          </p>
        </div>
      </div>
      <table className="w-full mx-auto bg-white rounded-lg shadow-md">
        <thead className="bg-gray-100">
          <tr className="text-gray-600 w-screen">
            <th className="py-3 w-1/6">Name</th>
            <th className="py-3 w-1/6">Price</th>
            <th className="py-3 w-1/6">Category</th>
            <th className="py-3 w-1/6">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <Product
              key={product.id}
              product={product}
              deleteProduct={deleteProduct}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;

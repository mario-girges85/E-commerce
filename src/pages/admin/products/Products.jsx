import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IconButton, Input } from "@material-tailwind/react";
import axios from "axios";
import Product from "./Product";
import Swal from "sweetalert2";

const Products = ({ products, setProducts }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product?.name?.toLowerCase().includes(searchTerm.toLowerCase())
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
          .delete(`https://booming-odd-lark.glitch.me/products/${id}`)
          .then(() => {
            setProducts(products.filter((product) => product.id !== id));
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          })
          .catch((error) => {
            console.error(error);
            Swal.fire({
              title: "Error!",
              text: "There was an error deleting the product.",
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
          Products Management
        </h1>
        <div className="w-full md:w-2/5">
          <Input
            color="blue"
            label="Search By Name..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            className="w-full"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap justify-evenly items-center mb-4 md:mb-0 md:mt-2">
        <div className="flex justify-evenly items-center gap-5 w-full lg:w-2/3 mb-2">
          <div className="w-2/6 md:w-1/3 xl:w-1/5 mb-4 md:mb-6 lg:mb-8 text-center">
            <p className="text-lg">
              Count:{" "}
              <span className="bg-indigo-500 text-white px-4 py-1 rounded-full text-base">
                {products.length}
              </span>
            </p>
          </div>
          <div className="w-3/6 md:w-2/4 xl:w-2/5 mb-4 md:mb-6 lg:mb-8 text-center">
            <p className="text-lg">
              Last added:{" "}
              <span className="bg-indigo-500 text-white px-4 py-1 rounded-full text-base">
                {products[products.length - 1]?.name?.substring(0, 8) || "N/A"}
              </span>
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 md:mb-6 lg:mb-8 text-center">
          <Link to="/admin/dashboard/products/add">
            <IconButton variant="outlined" className="rounded-full hover:bg-green-600 hover:text-white hover:border-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                  clipRule="evenodd"
                />
              </svg>
            </IconButton>
          </Link>
        </div>
      </div>
      {filteredProducts.length > 0 ? (
        <table className="w-full mx-auto bg-white rounded-lg shadow-md">
          <thead className="bg-gray-100">
            <tr className="text-gray-600 w-screen">
              <th scope="col" className="py-3 w-1/6">
                Name
              </th>
              <th scope="col" className="py-3 w-1/6">
                Price
              </th>
              <th scope="col" className="py-3 w-1/6">
                Category
              </th>
              <th scope="col" className="py-3 w-1/6">
                Actions
              </th>
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
      ) : (
        <p className="text-center text-gray-500">No products found.</p>
      )}
    </div>
  );
};

export default Products;

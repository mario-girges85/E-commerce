import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Input } from "@material-tailwind/react";
import axios from "axios";

const Products = ({ products, setProducts }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const deleteProduct = (id) => {
    axios.delete(`https://booming-odd-lark.glitch.me/products/${id}`)
      .then((response) => {
        console.log(response);
        setProducts(products.filter((product) => product.id !== id));
      })
      .catch((error) => {
        console.error(error);
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
            label="Search By Title..."
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
            Number of products:{" "}
            <span className="bg-indigo-500 text-white px-4 p-1 rounded-full text-base">
              {products.length}
            </span>
          </p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 md:mb-6 lg:mb-8 text-center">
          <p className="text-lg">
            Last product added:{" "}
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
            <tr
              key={product.id}
              className="border-b border-gray-200 text-center"
            >
              <td className="py-3">
                {product.name.length > 15
                  ? product.name.substring(0, 10) + "..."
                  : product.name}
              </td>
              <td className="py-3">{product.price}</td>
              <td className="py-3">{product.category}</td>
              <td className="px-4 py-3 flex flex-col lg:flex-row justify-center">
                <Link to={`/admin/dashboard/products/edit/${product.id}`}>
                  <Button color="amber" className="mx-1">
                    Edit
                  </Button>
                </Link>
                <Link to={`/admin/dashboard/products/view/${product.id}`}>
                  <Button color="blue" className="mx-1">
                    View
                  </Button>
                </Link>
                <Button
                  color="red"
                  onClick={() => deleteProduct(product.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;

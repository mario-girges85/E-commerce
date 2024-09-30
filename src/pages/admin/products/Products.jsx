import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Input } from "@material-tailwind/react";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" },
  ]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4 my-5">
      <h1 className="text-2xl font-bold my-5 text-center">
        Products Managment
      </h1>
      <div className="my-4 w-4/5 lg:w-2/5 mx-auto">
        <Input
          color="blue"
          label="Search By Title..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="my-10 flex justify-evenly items-center">
        <div className="flex gap-y-3 flex-col lg:flex-row lg:gap-8">
          <p className="text-lg">
            Number of products:{" "}
            <span className="bg-indigo-500 text-white px-4 p-1 rounded-full text-base">
              {products.length}
            </span>
          </p>
          <p className="text-lg">
            Last product added:{" "}
            <span className="bg-indigo-500 text-white px-4 p-1 rounded-full text-base">
              {products[products.length - 1]?.name}
            </span>
          </p>
        </div>
        <div>
          <Link to="/admin/dashboard/products/add" className="px-4 py-2">
            <Button color="green">Add</Button>
          </Link>
        </div>
      </div>
      <ul className="space-y-4">
        {filteredProducts.map((product) => (
          <li
            key={product.id}
            className="border border-gray-300 p-4 rounded flex justify-between items-center"
          >
            <span className="text-lg">{product.name}</span>
            <div className="space-x-2 flex gap-y-2 flex-col lg:flex-row text-center">
              <Link to={`/admin/dashboard/products/edit/${product.id}`}>
                <Button color="amber">Edit</Button>
              </Link>
              <Link to={`/admin/dashboard/products/view/${product.id}`}>
                <Button color="blue">View</Button>
              </Link>
              <Button
                color="red"
                onClick={() =>
                  setProducts(products.filter((p) => p.id !== product.id))
                }
              >
                Delete
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;

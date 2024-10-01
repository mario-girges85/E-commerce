import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "@material-tailwind/react";

const Add = ({ addProduct, products }) => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    addProduct({ id: products.length + 1, name });
    navigate("/admin/dashboard/products");
  };

  return (
    <div className="container mx-auto p-4 my-5">
      <h1 className="text-2xl font-bold my-5 text-center">
        Add New Product
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="my-4 w-4/5 lg:w-2/5 mx-auto">
          <Input
            color="blue"
            label="Product Name..."
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="my-10 flex justify-evenly items-center">
          <Button color="green" type="submit">
            Add Product
          </Button>
          <Button color="blue" onClick={() => navigate("/admin/dashboard/products")}>
            Back to Products
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Add;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "@material-tailwind/react";
import axios from "axios";

const Add = ({ addProduct }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const product = {
      name,
      description,
      price,
      category,
      image,
    };

    axios
      .post("https://booming-odd-lark.glitch.me/products", product)
      .then(() => {
        addProduct(product);
        navigate("/admin/dashboard/products");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="container mx-auto p-4 my-16">
      <h1 className="text-2xl font-bold my-5 text-center">Add New Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="my-4 w-4/5 lg:w-2/5 mx-auto">
          <Input
            color="blue"
            label="Product Name..."
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="my-4 w-4/5 lg:w-2/5 mx-auto">
          <Input
            color="blue"
            label="Product Description..."
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <div className="my-4 w-4/5 lg:w-2/5 mx-auto">
          <Input
            color="blue"
            label="Product Price..."
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </div>
        <div className="my-4 w-4/5 lg:w-2/5 mx-auto">
          <Input
            color="blue"
            label="Product Category..."
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          />
        </div>
        <div className="my-4 w-4/5 lg:w-2/5 mx-auto">
          <Input
            color="blue"
            label="Product Image URL..."
            value={image}
            onChange={(event) => setImage(event.target.value)}
          />
        </div>
        <div className="my-10 flex justify-evenly items-center">
          <Button color="green" type="submit">
            Add Product
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Add;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconButton, Input } from "@material-tailwind/react";
import axios from "axios";
import Swal from "sweetalert2";

const Add = ({ products, setProducts }) => {
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: "",
    rating: {
      rate: 0,
      count: 0,
    },
  });
  const navigate = useNavigate();

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("https://booming-odd-lark.glitch.me/products", data)
      .then(() => {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
        addProduct(data);
        navigate("/admin/dashboard/products");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="w-5/6 lg:w-3/6 mx-auto">
      <div className="container my-14">
        <h1 className="text-2xl font-bold my-5 text-center">Add New Product</h1>
        <form onSubmit={handleSubmit}>
          <div className="my-4">
            <Input
              color="blue"
              label="Product Name..."
              value={data.name}
              onChange={(event) =>
                setData({ ...data, name: event.target.value })
              }
            />
          </div>
          <div className="my-4">
            <Input
              color="blue"
              label="Product Description..."
              value={data.description}
              onChange={(event) =>
                setData({ ...data, description: event.target.value })
              }
            />
          </div>
          <div className="my-4">
            <Input
              color="blue"
              label="Product Price..."
              value={data.price}
              onChange={(event) =>
                setData({ ...data, price: event.target.value })
              }
            />
          </div>
          <div className="my-4">
            <Input
              color="blue"
              label="Product Category..."
              value={data.category}
              onChange={(event) =>
                setData({ ...data, category: event.target.value })
              }
            />
          </div>
          <div className="my-4">
            <Input
              color="blue"
              label="Product Image URL..."
              value={data.image}
              onChange={(event) =>
                setData({ ...data, image: event.target.value })
              }
            />
          </div>

          <div className="flex flex-col md:flex-row">
            <div className="my-3 w-full md:w-2/5 mx-auto">
              <Input
                color="blue"
                label="Product Rating..."
                type="number"
                className="w-full"
                value={data.rating.rate}
                onChange={(event) =>
                  setData({
                    ...data,
                    rating: { ...data.rating, rate: event.target.value },
                  })
                }
              />
            </div>
            <div className="my-3 w-full md:w-2/5 mx-auto">
              <Input
                color="blue"
                label="Product Counting..."
                type="number"
                className="w-full"
                value={data.rating.count}
                onChange={(event) =>
                  setData({
                    ...data,
                    rating: { ...data.rating, count: event.target.value },
                  })
                }
              />
            </div>
          </div>

          <div className="my-7 flex justify-evenly items-center">
            <IconButton
              variant="outlined"
              className="hover:bg-green-600 hover:text-white hover:border-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                  clipRule="evenodd"
                />
              </svg>
            </IconButton>
            <IconButton
              variant="outlined"
              onClick={() => navigate(-1)}
              className="hover:bg-red-600 hover:text-white hover:border-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 3.75A1.5 1.5 0 0 0 6 5.25v13.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V15a.75.75 0 0 1 1.5 0v3.75a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V9A.75.75 0 0 1 15 9V5.25a1.5 1.5 0 0 0-1.5-1.5h-6Zm10.72 4.72a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H9a.75.75 0 0 1 0-1.5h10.94l-1.72-1.72a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </IconButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add;

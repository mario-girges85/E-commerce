import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "@material-tailwind/react";
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
          timer: 1500
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
            <Button color="green" type="submit">
              Save
            </Button>
            <Button color="red" onClick={() => navigate(-1)}>
              Back
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add;
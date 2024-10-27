import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IconButton, Input } from "@material-tailwind/react";
import axios from "axios";
import Swal from "sweetalert2";

const Edit = ({ products, setProducts }) => {
  const [data, setData] = useState({
    code: 0,
    name: "",
    description: "",
    price: 0,
    category: "",
    image: "",
    rating: {
      rate: 0,
      count: 0,
    },
  });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    viewProduct();
  }, [id]);

  const viewProduct = () => {
    axios
      .get(`${import.meta.env.VITE_API_URL_PRODUCTS}/${id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  };

  const editProduct = (updatedProduct) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id == updatedProduct.id ? updatedProduct : product
      )
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .put(`${import.meta.env.VITE_API_URL_PRODUCTS}/${id}`, data)
      .then(() => {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/admin/dashboard/products");
        editProduct(data);
      });
  };

  return (
    <div className="w-5/6 lg:w-3/6 mx-auto py-5 md:py-16">
      <div className="container">
        <h1 className="text-2xl font-bold my-3 md:my-5 text-center">
          Edit the Product
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="my-4">
            <Input
              color="blue"
              label="Name..."
              value={data.name}
              onChange={(event) =>
                setData({ ...data, name: event.target.value })
              }
            />
          </div>
          <div className="my-4">
            <Input
              color="blue"
              label="Description..."
              value={data.description}
              onChange={(event) =>
                setData({ ...data, description: event.target.value })
              }
            />
          </div>
          <div className="my-4">
            <Input
              color="blue"
              label="Price..."
              value={data.price}
              onChange={(event) =>
                setData({ ...data, price: parseFloat(event.target.value) })
              }
            />
          </div>
          <div className="my-4">
            <Input
              color="blue"
              label="Category..."
              value={data.category}
              onChange={(event) =>
                setData({ ...data, category: event.target.value })
              }
            />
          </div>
          <div className="my-4">
            <Input
              color="blue"
              label="Image URL..."
              value={data.image}
              onChange={(event) =>
                setData({ ...data, image: event.target.value })
              }
            />
          </div>

          <div className="flex flex-col md:flex-row justify-evenly my-4">
            <div className="my-2 w-full md:w-2/5">
              <Input
                color="blue"
                label="Rating..."
                type="number"
                className="w-full"
                value={data.rating.rate}
                onChange={(event) =>
                  setData({
                    ...data,
                    rating: {
                      ...data.rating,
                      rate: parseFloat(event.target.value),
                    },
                  })
                }
              />
            </div>
            <div className="my-2 w-full md:w-2/5">
              <Input
                color="blue"
                label="Counting..."
                type="number"
                className="w-full"
                value={data.rating.count}
                onChange={(event) =>
                  setData({
                    ...data,
                    rating: {
                      ...data.rating,
                      count: parseInt(event.target.value),
                    },
                  })
                }
              />
            </div>
          </div>

          <div className="my-4 md:my-7 flex justify-evenly items-center">
            <IconButton
              variant="outlined"
              color="green"
              type="submit"
              className="hover:bg-green-600 hover:text-white"
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
              color="red"
              onClick={() => navigate(-1)}
              className="hover:bg-red-600 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M9.53 2.47a.75.75 0 0 1 0 1.06L4.81 8.25H15a6.75 6.75 0 0 1 0 13.5h-3a.75.75 0 0 1 0-1.5h3a5.25 5.25 0 1 0 0-10.5H4.81l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 0Z"
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

export default Edit;

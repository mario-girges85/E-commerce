import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Input } from "@material-tailwind/react";
import axios from "axios";
import Swal from "sweetalert2";

const Edit = ({ editProduct }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({
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

  const fetchProduct = () => {
    axios
      .get(`https://capable-scrawny-principal.glitch.me/products/${id}`)
      .then((response) => {
        setData(response.data);
      });
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .put(`https://capable-scrawny-principal.glitch.me/products/${id}`, data)
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
    <div className="w-5/6 lg:w-3/6 mx-auto">
      <div className="container my-14">
        <h1 className="text-2xl font-bold my-5 text-center">
          Edit the Product
        </h1>
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

          <div className="flex sm:flex-row flex-col">
            <div className="my-3 w-full lg:w-2/5 mx-auto">
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
            <div className="my-3 w-full lg:w-2/5 mx-auto">
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

export default Edit;

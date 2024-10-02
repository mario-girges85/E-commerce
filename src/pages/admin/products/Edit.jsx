import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Button,
  Input,
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import Axios from "axios";

const Edit = ({ editProduct }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");

  const fetchProduct = () => {
    Axios({
      method: "get",
      url: `https://booming-odd-lark.glitch.me/products/${id}`,
    }).then((response) => {
      setName(response.data.name);
      setCategory(response.data.category);
      setDescription(response.data.description);
      setPrice(response.data.price);
      setImage(response.data.image);
    });
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedProduct = { id, name, description, price, category, image };

    Axios(`https://booming-odd-lark.glitch.me/products/${id}`, {
      method: "PUT",
      data: updatedProduct,
    }).then(() => {
      editProduct(updatedProduct);
      navigate("/admin/dashboard/products");
    });
  };

  return (
    <div className="flex justify-center items-center my-20">
      <Card className="w-full max-w-md p-6">
        <CardBody>
          <Typography
            variant="h4"
            color="blue-gray"
            className="text-center mb-6"
          >
            Edit Product
          </Typography>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <Input
                type="text"
                label="Name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                size="lg"
              />
            </div>
            <div className="mb-4">
              <Input
                type="text"
                label="Description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                size="lg"
              />
            </div>
            <div className="mb-4">
              <Input
                type="text"
                label="Category"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                size="lg"
              />
            </div>
            <div className="mb-4">
              <Input
                type="number"
                label="Price"
                value={price}
                onChange={(event) => setPrice(event.target.value)}
                size="lg"
              />
            </div>
            <div className="mb-4">
              <Input
                type="text"
                label="Image URL"
                value={image}
                onChange={(event) => setImage(event.target.value)}
                size="lg"
              />
            </div>
            <Button color="green" type="submit" fullWidth>
              Save Changes
            </Button>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default Edit;

// E-commerce/src/pages/admin/products/Edit.jsx
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Input } from "@material-tailwind/react";
import Axios from "axios";

const Edit = ({ setProducts, products }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);

  const fetchProduct = () => {
    Axios({
      method: "get",
      url: `https://booming-odd-lark.glitch.me/products/${id}`,
    }).then((response) => {
      setName(response.data.name);
      setDescription(response.data.description);
      setPrice(response.data.price);
    });
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedProduct = { name, description, price };

    Axios(`https://booming-odd-lark.glitch.me/products/${id}`, {
      method: "PUT",
      data: updatedProduct,
    }).then((response) => {
      setProducts(products.map((product) => (product.id === id ? updatedProduct : product)));
      navigate("/admin/dashboard/products");
    });
  };

  return (
    <div>
      <h1>Edit Product</h1>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          label="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <Input
          type="text"
          label="Description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <Input
          type="number"
          label="Price"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
        <Button color="green" type="submit">
          Save Changes
        </Button>
      </form>
    </div>
  );
};

export default Edit;
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Card,
  CardBody,
  Typography,
  CardFooter,
  Button,
} from "@material-tailwind/react";

const View = ({ products }) => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    viewData();
  }, [id, products]);

  const viewData = () => {
    const foundProduct = products.find(
      (product) => product.id === parseInt(id)
    );
    setProduct(foundProduct);
  };

  return (
    <div className="my-20 container mx-auto">
      <Card className="w-full max-w-lg mas-h-lg mx-auto bg-white rounded-lg shadow-md text-center">
        <div className="flex justify-center items-center">
          <img
            src={product?.image}
            alt={product?.name}
            className="w-3/5 max-w-full h-80 object-cover my-2"
          />
        </div>
        <CardBody className="px-6 py-4">
          {product?.name && (
            <Typography variant="h5" className="font-bold">
              {product.name}
            </Typography>
          )}
          {product?.description && (
            <Typography variant="h5" color="gray" className="my-2">
              {product.description}
            </Typography>
          )}
          {product?.category && (
            <Typography variant="h5" className="font-bold my-2">
              {product.category}
            </Typography>
          )}
          {product?.price && (
            <Typography variant="h5" className="font-bold">
              ${product.price}
            </Typography>
          )}
        </CardBody>
        <CardFooter className="my-2 flex flex-row justify-evenly items-center">
          <Button
            color="amber"
            onClick={() => navigate(`/admin/dashboard/products/edit/${id}`)}
          >
            Edit
          </Button>
          <Button color="red" onClick={() => navigate(-1)}>
            Back
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default View;
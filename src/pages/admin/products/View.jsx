import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Card,
  CardBody,
  Typography,
  CardFooter,
  IconButton,
} from "@material-tailwind/react";

const View = ({ products }) => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    viewProduct();
  }, [id, products]);

  const viewProduct = () => {
    const foundProduct = products.find(
      (product) => product.id === parseInt(id)
    );
    setProduct(foundProduct);
  };

  return (
    <div className="my-12 md:my-16 container mx-auto">
      <Card className="w-[90%] max-w-lg mx-auto bg-white rounded-lg shadow-md text-center">
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
          <IconButton
            variant="outlined"
            onClick={() => navigate(`/admin/dashboard/products/edit/${id}`)}
            className="hover:bg-purple-600 hover:text-white hover:border-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
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
        </CardFooter>
      </Card>
    </div>
  );
};

export default View;

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
    const foundProduct = products?.find((product) => product._id == id);
    setProduct(foundProduct);
  };

  return (
    <div className="py-3 md:py-10 lg:py-16 container mx-auto">
      <Card className="max-w-lg mx-auto bg-white dark:bg-backcolor dark:text-maincolor rounded-lg text-center shadow-none">
        <div className="flex justify-center items-center">
          <img
            src={product?.image}
            alt={product?.name}
            className="w-3/5 max-w-full h-80 object-cover mt-2"
          />
        </div>
        <CardBody className="px-6 py-2">
          {product?.name && (
            <Typography variant="h5" className="font-bold">
              {product.name}
            </Typography>
          )}
          {product?.description && (
            <Typography variant="h6" color="gray" className="my-2">
              {product.description}
            </Typography>
          )}
          {product?.category && (
            <Typography variant="h6" className="font-bold my-2">
              {product.category}
            </Typography>
          )}
          {product?.price && (
            <Typography variant="h5" className="font-bold">
              ${product.price}
            </Typography>
          )}
        </CardBody>
        <CardFooter className="flex flex-row justify-evenly items-center">
          <IconButton
            variant="outlined"
            color="deep-purple"
            className="hover:bg-deep-purple-600 hover:text-white"
            onClick={() => navigate(`/admin/dashboard/products/edit/${id}`)}
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
        </CardFooter>
      </Card>
    </div>
  );
};

export default View;

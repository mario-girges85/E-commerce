import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Rating,
  Avatar,
  Tooltip,
} from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import axios from "axios";
import { useState, useEffect } from "react";
const Product = (props) => {
  const {
    id,
    name,
    description,
    price,
    category,
    image,
    rating: { rate, count },
    code,
  } = props.data;
  const { postusercart } = props;
  const [productcart] = useState({
    count: 1,
    code: code,
    name: name,
    price: price,
    image: image,
  });

  return (
    <div className="flex justify-center items-center w-full cursor-pointer sm:w-[40%] md:w-[30%] lg:w-56 ">
      <Card className=" flex justify-center items-center w-fit overflow-hidden  dark:bg-backcolor_top shadow-black dark:haover:shadow-white shadow-md">
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className=" m-0 rounded-none "
        >
          <div className="w-[100%] h-28 ">
            <img
              className="w-full h-full object-fill"
              src={image}
              alt="img of the product"
            />
          </div>
        </CardHeader>
        <CardBody>
          <Typography
            className="text-lg dark:text-white"
            variant="h4"
            color="blue-gray"
          >
            {name.slice(0, 20)}
          </Typography>
          <Typography
            variant="lead"
            color="gray"
            className="mt-3 text-sm dark:text-white "
          >
            {description.slice(0, 100)}
          </Typography>
        </CardBody>
        <div>
          <div className="flex dark:text-white flex-wrap justify-center items-center gap-2 font-bold text-blue-gray-500">
            {rate}
            <Rating value={parseInt(rate)} readonly />
            <Typography
              color="blue-gray"
              className="font-normal dark:text-white text-xs text-center text-blue-gray-500 w-full"
            >
              Based on {count} Reviews
            </Typography>
          </div>
        </div>
        <CardFooter className="flex items-center justify-between ">
          <Typography className="mr-2 dark:text-white">{price}$</Typography>
          <Typography className="font-normal text-white">
            <Button
              onClick={() => postusercart(productcart)}
              className="text-nowrap pr-[10%] pl-[10%] dark:bg-maincolor"
            >
              Add to Cart
            </Button>
          </Typography>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Product;

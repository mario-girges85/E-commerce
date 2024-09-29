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
import { useState, useEffect } from "react";
const Product = ({
  data: {
    id,
    name,
    description,
    price,
    category,
    image,
    rating: { rate, count },
  },
}) => {
  // console.log(image);
  return (
    <div className="w-full sm:w-[40%] md:w-[30%] lg:w-[22%]">
      <Card className=" flex items-center overflow-hidden">
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
          <Typography className="text-lg " variant="h4" color="blue-gray">
            {name.slice(0, 20)}
          </Typography>
          <Typography variant="lead" color="gray" className="mt-3 text-sm ">
            {description.slice(0, 100)}
          </Typography>
        </CardBody>
        <div>
          <div className="flex flex-wrap justify-center items-center gap-2 font-bold text-blue-gray-500">
            {rate}
            <Rating value={4} readonly />
            <Typography
              color="blue-gray"
              className="font-normal text-xs text-center text-blue-gray-500 w-full"
            >
              Based on {count} Reviews
            </Typography>
          </div>
        </div>
        <CardFooter className="flex items-center justify-between ">
          <Typography className="mr-2">{price}$</Typography>
          <Typography className="font-normal">
            <Button>Add to Cart</Button>
          </Typography>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Product;
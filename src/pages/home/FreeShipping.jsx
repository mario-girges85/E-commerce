import React from "react";
import { Typography } from "@material-tailwind/react";

const FreeShipping = () => {
  return (
    <div className="flex flex-col  mb-2 px-2 py-6   shadow-blue-gray-500 md:flex-row justify-around   dark:bg-backcolor  ">
      <div className="flex flex-col items-center">
        <Typography
          variant="h2"
          className="text-center text-blue-gray-500 dark:text-maincolor"
        >
          Fast Secure Payments
        </Typography>
        <img
          src="https://cdn-icons-png.flaticon.com/256/8984/8984290.png"
          alt="Secure payments"
          className=" max-h-64 max-w-64"
        />
      </div>
      <div className="flex flex-col items-center mb-10 md:mb-0">
        <Typography
          variant="h2"
          className="text-blue-gray-500 dark:text-maincolor"
        >
          Free Shipping
        </Typography>
        <img
          src="https://cdn-icons-png.flaticon.com/256/3901/3901488.png"
          alt="Premium Products"
          className=" max-h-64 max-w-64 md:mt-6 lg:mt-0"
        />
      </div>
      <div className="flex flex-col items-center">
        <Typography
          variant="h2"
          className="text-center text-blue-gray-500 dark:text-maincolor"
        >
          Premium Products
        </Typography>
        <img
          src="https://cdn-icons-png.flaticon.com/256/16901/16901465.png"
          alt="Premium Products"
          className=" max-h-64 max-w-64 "
        />
      </div>
    </div>
  );
};

export default FreeShipping;

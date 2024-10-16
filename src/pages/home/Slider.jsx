import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Carousel,
  Typography,
  Card,
  CardHeader,
  CardBody,
  button,
} from "@material-tailwind/react";
import SliderCaption from "./SliderCaption";

const Slider = () => {
  const [productsdata, setproductsdata] = useState([]);

  //getting data
  const getdata = () => {
    axios
      .get("https://booming-odd-lark.glitch.me/products")
      .then(({ data }) => {
        setproductsdata(data);
      });
  };
  useEffect(() => {
    getdata();
  }, []);

  useEffect(() => {}, [productsdata]);

  return (
    // <div className="flex flex-row">

    <div className="flex flex-col items-center justify-center md:flex-row h-[30rem] mb-2 rounded-3xl  shadow-2xl shadow-blue-gray-500  dark:shadow-light-green-600">
      <SliderCaption />
      <Carousel className="rounded-3xl  w-full my-2 md:w-[40%] ">
        {productsdata.map((product, index) => (
          <div key={index} className="relative h-full w-full">
            <Card className="absolute inset-0  grid h-full w-full place-items-center bg-blue-gray-500 p-4  dark:bg-light-green-600">
              <CardHeader color="blue-gray" className="relative h-56">
                <img
                  src={product.image}
                  alt="card-image-1"
                  className="h-full w-full object-cover"
                />
              </CardHeader>
              <CardBody>
                <Typography
                  variant="h4"
                  color="white"
                  className="mb-2 font-extrabold text-center"
                >
                  {product.name}
                </Typography>
                <Typography
                  color="white"
                  className="mb-4 opacity-80 font-bold text-center"
                >
                  {product.category}
                </Typography>
              </CardBody>
            </Card>
          </div>
        ))}
      </Carousel>

      {/* <div className=" flex flex-col md:w-[60%]">
        <h1 className="  text-center justify-center text-4xl md:text-8xl my-3 font-bold w-full   ">
          High rated products
        </h1>
        <h4 className="flex flex-col text-center justify-center text-4xl my-3 font-bold w-full  ">
          Discover our best-selling products that customers can't stop raving
          about!"
        </h4>
      </div> */}
    </div>
  );
};

export default Slider;

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
import img1 from "../images/home/img1.png";
import img2 from "../images/home/img2.png";
import img3 from "../images/home/img3.png";
import img4 from "../images/home/img4.png";
const Slider = () => {
  return (
    // <div className="flex flex-row">

    <div className="flex flex-col  items-center justify-center m-5 lg:flex-row   rounded-3xl  ">
      <SliderCaption />
      <Carousel
        loop={true}
        autoplay={true}
        color="black"
        className="rounded-3xl shadow-lg shadow-black  w-full my-2 lg:w-[50%]  "
      >
        <img
          src={img1}
          alt=""
          className="h-full w-full object-cover object-center"
        />
        <img
          src={img2}
          alt=""
          className="h-full w-full object-cover object-center"
        />
        <img
          src={img3}
          alt=""
          className="h-full w-full object-cover object-center"
        />
        <img
          src={img4}
          alt=""
          className="h-full w-full object-cover object-center"
        />
      </Carousel>
    </div>
  );
};

export default Slider;

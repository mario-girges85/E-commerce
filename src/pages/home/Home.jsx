import React from "react";
import Slider from "./Slider";
import FreeShipping from "./FreeShipping";
const Home = () => {
  return (
    <div className="flex-col justify-center dark:bg-backcolor flex gap-10 ">
      <Slider />
      <FreeShipping />
    </div>
  );
};

export default Home;

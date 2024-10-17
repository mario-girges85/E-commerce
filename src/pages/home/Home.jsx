import React from "react";
import Slider from "./Slider";
import FreeShipping from "./FreeShipping";
const Home = () => {
  return (
    <div className="flex-col justify-center flex gap-10 mt-3">
      <Slider />
      <FreeShipping />
    </div>
  );
};

export default Home;

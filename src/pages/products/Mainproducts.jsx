import React from "react";
import axios from "axios";
import Aside from "./Aside";
import { useState, useEffect } from "react";
import Product from "./Product";
import { Drawer, Input, Select, Option } from "@material-tailwind/react";

const Mainproducts = () => {
  const [productsdata, setproductsdata] = useState([]);

  //checking from value
  let check_from = (e) => {
    if (e.target.value >= 0 && !isNaN(e.target.value)) {
      setfromValue(e.target.value);
    }
  };
  //checking to value
  let check_to = (e) => {
    if (
      (e.target.value >= 0 && !isNaN(e.target.value)) ||
      e.target.value >= fromValue
    ) {
      settoValue(e.target.value);
    }
  };

  //getting data
  const getdata = () => {
    axios
      .get("https://booming-odd-lark.glitch.me/products")
      .then(({ data }) => {
        setproductsdata(data);
      });
    // console.log(productsdata);
  };

  //update data
  useEffect(() => getdata(), []);

  return (
    <div className="flex flex-col gap-3 justify-between items-center w-[85%] m-auto  pt-4  ">
      {/**======================================================================================= */}
      <Aside />
      {/**======================================================================================= */}

      {/*products*/}
      <div className=" mt-5 flex flex-row flex-wrap gap-2  justify-evenly items-center">
        {productsdata.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Mainproducts;

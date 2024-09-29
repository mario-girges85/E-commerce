import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Product from "./Product";
import Aside from "./Aside";

const Mainproducts = () => {
  const [productsdata, setproductsdata] = useState([]);
  const getdata = () => {
    axios
      .get("https://booming-odd-lark.glitch.me/products")
      .then(({ data }) => {
        setproductsdata(data);
      });
    // console.log(productsdata);
  };
  useEffect(() => getdata(), []);

  return (
    <div className="flex flex-row ">
      {/* <Aside className="" /> */}
      <div className=" w-[90%] mt-5 flex flex-row flex-wrap gap-2 m-auto justify-evenly items-center">
        {productsdata.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Mainproducts;

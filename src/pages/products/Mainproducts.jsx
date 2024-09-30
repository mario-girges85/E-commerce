import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Product from "./Product";
import { Drawer, Input, Select, Option } from "@material-tailwind/react";

const Mainproducts = () => {
  const [productsdata, setproductsdata] = useState([]);
  const [fromValue, setfromValue] = useState();
  const [toValue, settoValue] = useState();
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

  //filter drawer
  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  return (
    <div className="flex flex-col gap-3 justify-between items-center w-[85%] m-auto  pt-4  ">
      {/**======================================================================================= */}
      <div>
        <React.Fragment>
          <h1 onClick={openDrawer}>Open Drawer</h1>
          <Drawer
            open={open}
            onClose={closeDrawer}
            className="flex flex-col justify-start items-start gap-4 w-[20%] p-3"
          >
            <div className="flex flex-col justify-start items-start gap-4 w-[100%] p-3 border-solid border-b-2 border-gray-400">
              <h1 className="w-full text-nowrap">Price</h1>
              <Input
                className=""
                label="From"
                type="number"
                min="0"
                value={fromValue}
                onChange={(e) => check_from(e)}
              />
              <Input
                label="To"
                type="number"
                min="0"
                value={toValue}
                onChange={(e) => check_to(e)}
              />
            </div>
            <div className="w-full flex flex-col justify-start items-start gap-4 p-3 ">
              <h1>category</h1>
              <Select label="Select category">
                <Option>Option 1</Option>
                <Option>Option 2</Option>
                <Option>Option 3</Option>
                <Option>Option 4</Option>
              </Select>
            </div>
          </Drawer>
        </React.Fragment>
      </div>
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

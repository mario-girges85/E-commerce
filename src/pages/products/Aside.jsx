import React from "react";
import axios from "axios";

import { useState, useEffect } from "react";
import Product from "./Product";
import { Drawer, Input, Select, Option } from "@material-tailwind/react";

const Aside = () => {
  const [fromValue, setfromValue] = useState();
  const [toValue, settoValue] = useState();
  //filter drawer
  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  return (
    <div>
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
    </div>
  );
};

export default Aside;

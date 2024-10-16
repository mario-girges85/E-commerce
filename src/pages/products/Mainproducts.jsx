import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Product from "./Product";
import {
  Drawer,
  Input,
  Select,
  Option,
  Button,
} from "@material-tailwind/react";
import Swal from "sweetalert2";
const Mainproducts = () => {
  //products data
  const [productsdata, setproductsdata] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  //get old cart data
  const [usercart, setusercart] = useState([]);
  function getusercart() {
    axios
      .get(`https://booming-odd-lark.glitch.me/users/${localStorage.ud}`)
      .then(({ data }) => {
        setusercart(data.cart);
      });
  }
  useEffect(() => getusercart(), []);

  //post to cart
  function postusercart(data) {
    let product = data;
    let newcart = usercart;
    if (usercart.some((item) => item.name === data.name)) {
      const index = newcart.findIndex((item) => item.name == data.name);
      newcart[index].count += 1;
      setusercart(newcart);
      axios.patch(
        `https://booming-odd-lark.glitch.me/users/${localStorage.ud}`,
        {
          cart: usercart,
        }
      );
      Swal.fire({
        width: "300px",

        position: "bottom-end",
        icon: "success",
        title: `${data.name} count = ${data.count} `,
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      newcart.push(product);
      setusercart(newcart);
      axios.patch(
        `https://booming-odd-lark.glitch.me/users/${localStorage.ud}`,
        {
          cart: usercart,
        }
      );
      Swal.fire({
        width: "300px",

        position: "bottom-end",
        icon: "success",
        title: `${data.name} added successfully `,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }

  //filter value
  const [fromValue, setfromValue] = useState(0);
  const [toValue, settoValue] = useState(0);
  const [category, setcategory] = useState("All");

  //filter drawer
  const [open, setOpen] = useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  // Checking "from" value
  let check_from = (e) => {
    const value = e.target.value;
    if (value >= 0 && !isNaN(value)) {
      setfromValue(value);
    }
  };

  // Checking "to" value
  let check_to = (e) => {
    const value = e.target.value;
    if (value >= 0 && !isNaN(value) && value >= fromValue) {
      settoValue(value);
    }
  };

  //getting products data
  const getdata = () => {
    axios
      .get("https://booming-odd-lark.glitch.me/products")
      .then(({ data }) => {
        setproductsdata(data);
        setFilteredProducts(data); // initialize with all products
      });
  };

  //apply filter
  const applyfilter = () => {
    let filtered = productsdata.filter((product) => {
      // no price no category
      if (fromValue == 0 && toValue == 0 && category == "All") {
        return product;

        // no price   yes category
      } else if (fromValue == 0 && toValue == 0 && category != "All") {
        return product.category == category;

        // yes price yes category
      } else if (toValue >= fromValue && category != "All") {
        return (
          product.price >= fromValue &&
          product.price <= toValue &&
          product.category == category
        );
      } else {
        return product.price >= fromValue && product.price <= toValue;
      }
    });
    setFilteredProducts(filtered);
  };

  //update data on component load
  useEffect(() => {
    getdata();
  }, []);

  //update filtered products whenever filter values or apply button changes
  useEffect(() => {
    applyfilter();
  }, [fromValue, toValue, category]);

  return (
    <div className="flex flex-col dark:bg-backcolor gap-3 justify-between items-start px-20 pt-4">
      {/**=================================filter====================================================== */}
      <div>
        <React.Fragment>
          <h1
            className="cursor-pointer dark:text-maincolor p-3 text-blue-gray-900 font-bold underline underline-offset-8"
            onClick={openDrawer}
          >
            Filter
          </h1>
          <Drawer
            open={open}
            onClose={closeDrawer}
            className="flex flex-col justify-start items-center gap-4 w-[100%] p-3 dark:bg-backcolor_top"
          >
            <div className="flex flex-col justify-start items-start gap-4 w-[100%] p-3 border-solid border-b-2 border-gray-400">
              <h1 className="w-full text-nowrap dark:text-white">Price</h1>
              <Input
                color={localStorage.theme == "dark" ? "white" : "black"}
                label="From"
                type="number"
                min="0"
                value={fromValue}
                onChange={check_from}
              />
              <Input
                // className="dark:text-white dark:border-white"
                color={localStorage.theme == "dark" ? "white" : "black"}
                label="To"
                type="number"
                min="0"
                value={toValue}
                onChange={check_to}
              />
            </div>

            <div className="w-full flex flex-col justify-start items-start gap-4 p-3">
              <h1 className="dark:text-white">Category</h1>
              <Select
                label="Select category"
                value={category}
                onChange={(val) => setcategory(val)}
                // color={localStorage.theme == "dark" ? "white" : "black"}
              >
                <Option value="All">All</Option>
                <Option value="Electronics">Electronics</Option>
                <Option value="food">food</Option>
                <Option value="vehicles">vehicles</Option>
              </Select>
            </div>
          </Drawer>
        </React.Fragment>
      </div>
      {/**======================================================================================= */}

      {/*products*/}
      <div className="mt-5 m-auto flex flex-row flex-wrap gap-5 justify-evenly items-center ">
        {filteredProducts.map((product) => (
          <Product
            key={product.id}
            usercart={usercart}
            setusercart={setusercart}
            data={product}
            postusercart={postusercart}
          />
        ))}
      </div>
    </div>
  );
};

export default Mainproducts;

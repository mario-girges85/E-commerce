import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Userlayout from "./Userlayout";
import Adminlayout from "./Adminlayout";
import Notfound from "./Notfound";
import Nav from "./components/navComponent/Nav";
import Cart from "./pages/user/Cart";
import Footer from "./components/Footer";
import axios from "axios";
const App = () => {
  localStorage.theme = "light";
  const api_products = import.meta.env.VITE_API_URL_PRODUCTS;
  const api_users = import.meta.env.VITE_API_URL_USERS;
  const [users, setusers] = useState([]);
  const [products, setproducts] = useState([]);
  const [userdata, setuserdata] = useState(null);
  const [userid, setuserid] = useState(localStorage.id);
  const [cn, setcn] = useState(localStorage.cn);
  const [usercart, setusercart] = useState(null);
  /*=========================================== */
  /*logged user dat */
  const getuserdata = () => {
    axios
      .get(`${api_users}/${userid}`)
      .then((data) => {
        setuserdata(data.data);
      })
      .then(() => {
        setusercart(userdata.cart);
      })
      .catch(() => {
        console.error("error catching logged user data");
      });
  };
  useEffect(() => {
    if (cn) {
      getuserdata();
    }
  }, [cn, userid]);

  /*=========================================== */
  // getting all products data
  const getproductsdata = () => {
    axios
      .get(`${api_products}`)
      .then((data) => {
        setproducts(data.data);
      })
      .then(() => {})
      .catch(() => {
        console.error("error catching products data");
      });
  };

  useEffect(() => getproductsdata(), [products]);

  return (
    <div className="  ">
      <Nav userdata={userdata} cn={cn} />
      <Routes>
        <Route
          path="/*"
          element={
            <Userlayout
              userdata={userdata}
              userid={userid}
              setcn={setcn}
              setuserid={setuserid}
              users={users}
              products={products}
              usercart={usercart}
            />
          }
        ></Route>

        {/* data var is 
        products
        users
        userdata
        userid
        Please don't use something else
        */}
        <Route
          path="/admin/*"
          element={
            <Adminlayout
              products={products}
              setProducts={setproducts}
            />
          }
        ></Route>
        <Route path="*" element={<Notfound />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

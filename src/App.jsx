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
  /*=========================================== */
  /*logged user dat */
  const getuserdata = () => {
    axios
      .get(`${api_users}/${userid}`)
      .then((data) => {
        setuserdata(data.data);
      })
      .then(() => {})
      .catch(() => {
        console.error("error catching logged user data");
      });
  };
  useEffect(() => {
    if (cn) {
      getuserdata();
    }
  }, [cn, userid, userdata]);
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
        console.error("error catching logged user data");
      });
  };
  useEffect(() => getproductsdata(), [products]);
  return (
    <div className="  ">
      <Nav cn={cn} />
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
        <Route path="/admin/*" element={<Adminlayout />}></Route>
        <Route path="*" element={<Notfound />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

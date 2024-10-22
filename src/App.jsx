import React from "react";
import { Route, Routes } from "react-router-dom";
import Userlayout from "./Userlayout";
import Adminlayout from "./Adminlayout";
import Notfound from "./Notfound";
import Nav from "./components/navComponent/Nav";
import Cart from "./pages/user/Cart";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
const App = () => {
  localStorage.theme = "light";
  /* variables of APIs in env & users data & logged user data  & products data */
  const api_products = import.meta.env.VITE_API_URL_PRODUCTS;
  const api_users = import.meta.env.VITE_API_URL_USERS;
  const [users, setusers] = useState([]);
  const [products, setproducts] = useState([]);
  const [userdata, setuserdata] = useState(null);
  const [userid, setuserid] = useState(localStorage.id);
  const [cn, setcn] = useState(localStorage.cn);
  /*=========================================== */
  /*getting all users data*/
  const getusersdata = () => {
    axios
      .get(`${api_users}`)
      .then((data) => {
        setusers(data.data);
      })
      .catch(() => {
        console.error("error getting all users data");
      });
  };
  useEffect(() => {
    getusersdata();
  }, [users]);
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

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
  const [users, setusers] = useState(null);
  const [products, setproducts] = useState([]);
  const [userdata, setuserdata] = useState(null);
  const [userid, setuserid] = useState(localStorage.id);
  const [cn, setcn] = useState(localStorage.cn);
  const [usercart, setusercart] = useState(null);
  /*=========================================== */
  /*logged user data */
  const getuserdata = () => {
    axios
      .get(`${api_users}/${userid}`)
      .then(({ data }) => {
        setuserdata(data);
      })
      .then(() => {
        setusercart(userdata.cart);
      })
      .then(() => {
        console.log("logged user data DONE");
      })
      .catch(() => {
        console.error("error catching logged user data failed");
      });
  };
  useEffect(() => {
    if (cn) {
      getuserdata();
    }
  }, [cn, userid]);

  /*=========================================== */
  // getting all users
  const getAllUsers = () => {
    axios
      .get(`${import.meta.env.VITE_API_URL_USERS}`)
      .then(({ data }) => {
        setusers(data);
      })
      .then(() => {
        console.log("all users data DONE");
      })
      .catch((err) => {
        console.log("error catching all users data");
      });
  };

  useEffect(() => {
    if (users == null) {
      getAllUsers();
    }
  }, [users]);

  /*=========================================== */
  // getting all products data
  const getproductsdata = () => {
    axios
      .get(`${api_products}`)
      .then((data) => {
        setproducts(data.data);
      })
      .then(() => {
        console.log("products done");
      })
      .catch(() => {
        console.error("error catching products data");
      });
  };

  useEffect(() => getproductsdata(), []);

  return (
    <div className="  ">
      <Nav userdata={userdata} cn={cn} />
      <Routes>
        <Route
          path="/*"
          element={
            <Userlayout
              userid={userid}
              setcn={setcn}
              setuserid={setuserid}
              users={users}
              products={products}
              usercart={usercart}
            />
          }
        ></Route>

        <Route
          path="/admin/*"
          element={
            <Adminlayout
              products={products}
              setProducts={setproducts}
              usersData={users}
              setUsersData={setusers}
            />
          }
        ></Route>

        <Route path="*" element={<Notfound />} />
        <Route
          path="/cart"
          element={
            <Cart
              products={products}
              users={users}
              usercart={usercart}
              userid={userid}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

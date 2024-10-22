import React from "react";
import { Route, Routes } from "react-router-dom";
import Notfound from "./Notfound";
import Home from "./pages/home/Home";
import Mainproducts from "./pages/products/Mainproducts";
import LogIn from "./pages/register_login_pages/LogIn";
import SignUp from "./pages/register_login_pages/SignUp";
const Userlayout = ({
  users,
  userid,
  setuserid,
  setcn,
  userdata,
  products,
}) => {
  return (
    <div>
      <Routes>
        <Route path="*" element={<Notfound />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={<Mainproducts products={products} />}
        />
        <Route
          path="/login"
          element={
            <LogIn
              userdata={userdata}
              setcn={setcn}
              setuserid={setuserid}
              userid={userid}
              users={users}
            />
          }
        />
        <Route path="signup" element={<SignUp users={users} />} />
      </Routes>
    </div>
  );
};

export default Userlayout;

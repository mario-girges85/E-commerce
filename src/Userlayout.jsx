import React from "react";
import { Route, Routes } from "react-router-dom";
import Notfound from "./Notfound";
import Home from "./pages/home/Home";
import Mainproducts from "./pages/products/Mainproducts";
import LogIn from "./pages/register_login_pages/LogIn";
import SignUp from "./pages/register_login_pages/SignUp";
import Profile from "./pages/user/Profile";
import EditProfile from "./pages/user/EditProfile";
const Userlayout = ({
  users,
  userid,
  setuserid,
  setcn,
  userdata,
  products,
  usercart,
}) => {
  return (
    <div>
      <Routes>
        <Route path="*" element={<Notfound />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={
            <Mainproducts
              userdata={userdata}
              products={products}
              previouscart={usercart}
            />
          }
        />

        <Route
          path="/login"
          element={
            <LogIn
              user={userdata}
              setcn={setcn}
              setuserid={setuserid}
              userid={userid}
              users={users}
            />
          }
        />
        <Route path="signup" element={<SignUp users={users} />} />
        <Route
          path="profile"
          element={<Profile userdata={userdata} users={users} />}
        />
        <Route path="editprofile" element={<EditProfile />}></Route>
      </Routes>
    </div>
  );
};

export default Userlayout;

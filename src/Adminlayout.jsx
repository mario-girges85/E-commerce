import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/user/Home";
import Products from "./pages/admin/products/Products";
import Add from "./pages/admin/products/Add";
import Edit from "./pages/admin/products/Edit";
import View from "./pages/admin/products/View";
import Users from "./pages/admin/users/Users";
import Notfound from "./Notfound";
import axios from "axios";

const Adminlayout = () => {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    axios
      .get("https://booming-odd-lark.glitch.me/users")
      .then((response) => setUsers(response.data));
  };

  const getProducts = () => {
    axios
      .get("https://booming-odd-lark.glitch.me/products")
      .then((response) => {
        setProducts(response.data);
      });
  };

  useEffect(() => {
    getUsers();
  }, [users]);

  useEffect(() => {
    getProducts();
  }, [products]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/dashboard/products"
          element={<Products products={products} setProducts={setProducts} />}
        />
        <Route
          path="/dashboard/products/add"
          element={<Add products={products} setProducts={setProducts}/>}
        />
        <Route
          path="/dashboard/products/edit/:id"
          element={<Edit products={products} setProducts={setProducts}/>}
        />
        <Route
          path="/dashboard/products/view/:id"
          element={<View products={products} />}
        />
        <Route path="/dashboard/users" element={<Users users={users} setUsers={setUsers}/>} />
        <Route path="/*" element={<Notfound />} />
      </Routes>
    </div>
  );
};

export default Adminlayout;

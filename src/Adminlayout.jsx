import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/user/Home";
import Products from "./pages/admin/products/Products";
import Add from "./pages/admin/products/Add";
import Edit from "./pages/admin/products/Edit";
import View from "./pages/admin/products/View";
import Users from "./pages/admin/users/Users";
import Notfound from "./Notfound";

const Adminlayout = ({ products, setProducts, usersData, setUsersData }) => {
  return (
    <div className="dark:bg-backcolor dark:text-maincolor">
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route
          path="/dashboard/products"
          element={<Products products={products} setProducts={setProducts} />}
        />
        <Route
          path="/dashboard/products/add"
          element={<Add products={products} setProducts={setProducts} />}
        />
        <Route
          path="/dashboard/products/edit/:id"
          element={<Edit products={products} setProducts={setProducts} />}
        />
        <Route
          path="/dashboard/products/view/:id"
          element={<View products={products} />}
        />
        <Route
          path="/dashboard/users"
          element={<Users users={usersData} setUsers={setUsersData} />}
        />
        <Route path="/*" element={<Notfound />} />
      </Routes>
    </div>
  );
};

export default Adminlayout;

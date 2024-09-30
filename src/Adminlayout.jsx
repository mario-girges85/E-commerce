import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/admin/Dashboard";
import Products from "./pages/admin/products/Products";
import Add from "./pages/admin/products/Add";
import Edit from "./pages/admin/products/Edit";
import View from "./pages/admin/products/View";
import Users from "./pages/admin/users/Users";
import Notfound from "./Notfound";

const Adminlayout = () => {
  return (
    <div>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/products" element={<Products />} />
        <Route path="/dashboard/products/:action" element={<Add />} />
        <Route path="/dashboard/products/:edit/:id" element={<Edit />} />
        <Route path="/dashboard/products/:view/:id" element={<View />} />
        <Route path="/dashboard/users" element={<Users />} />
        <Route path="/*" element={<Notfound />} />
      </Routes>
    </div>
  );
};

export default Adminlayout;

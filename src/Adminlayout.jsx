import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/user/Home";
import Orders from "./pages/admin/orders/Orders";
import Products from "./pages/admin/products/Products";
import Add from "./pages/admin/products/Add";
import Edit from "./pages/admin/products/Edit";
import View from "./pages/admin/products/View";
import Users from "./pages/admin/users/Users";
import Notfound from "./Notfound";

const Adminlayout = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1" },
    { id: 2, name: "Product 2" },
    { id: 3, name: "Product 3" },
  ]);

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard/orders" element={<Orders />} />
        <Route
          path="/dashboard/products"
          element={<Products products={products} setProducts={setProducts} />}
        />
        <Route
          path="/dashboard/products/:action"
          element={<Add addProduct={addProduct} products={products} />}
        />
        <Route path="/dashboard/products/:edit/:id" element={<Edit />} />
        <Route path="/dashboard/products/:view/:id" element={<View />} />
        <Route path="/dashboard/users" element={<Users />} />
        <Route path="/*" element={<Notfound />} />
      </Routes>
    </div>
  );
};

export default Adminlayout;

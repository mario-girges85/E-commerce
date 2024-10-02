import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/user/Home";
import Orders from "./pages/admin/orders/Orders";
import Products from "./pages/admin/products/Products";
import Add from "./pages/admin/products/Add";
import Edit from "./pages/admin/products/Edit";
import View from "./pages/admin/products/View";
import Users from "./pages/admin/users/Users";
import Notfound from "./Notfound";
import Axios from "axios";

const Adminlayout = () => {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    Axios({
      method: "get",
      url: "https://booming-odd-lark.glitch.me/products",
    }).then((response) => {
      setProducts(response.data);
    })
  };

  useEffect(() => {
    getProducts();
  }, []);

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
        <Route
          path="/dashboard/products/:edit/:id"
          element={<Edit setProducts={setProducts} products={products} />}
        />
        <Route path="/dashboard/products/:view/:id" element={<View />} />
        <Route path="/dashboard/users" element={<Users />} />
        <Route path="/*" element={<Notfound />} />
      </Routes>
    </div>
  );
};

export default Adminlayout;

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

  const getProducts = () => {
    axios
      .get("https://capable-scrawny-principal.glitch.me/products")
      .then((response) => {
        setProducts(response.data);
      });
  };

  useEffect(() => {
    getProducts();
  }, [products]);

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const editProduct = (updatedProduct) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    );
  };

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
          element={<Add addProduct={addProduct} products={products} />}
        />
        <Route
          path="/dashboard/products/edit/:id"
          element={<Edit editProduct={editProduct} products={products} />}
        />
        <Route
          path="/dashboard/products/view/:id"
          element={<View products={products} />}
        />
        <Route path="/dashboard/users" element={<Users />} />
        <Route path="/*" element={<Notfound />} />
      </Routes>
    </div>
  );
};

export default Adminlayout;

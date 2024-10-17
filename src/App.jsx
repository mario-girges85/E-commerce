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

  localStorage.theme = "light";
  return (
    <div className="  ">
      <Nav />
      <Routes>
        <Route path="/*" element={<Userlayout />}></Route>
        <Route
          path="/admin/*"
          element={
            <Adminlayout
              products={products}
              setProducts={setProducts}
              users={users}
              setUsers={setUsers}
            />
          }
        ></Route>
        <Route path="*" element={<Notfound />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

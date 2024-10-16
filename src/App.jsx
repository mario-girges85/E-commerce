import React from "react";
import { Route, Routes } from "react-router-dom";
import Userlayout from "./Userlayout";
import Adminlayout from "./Adminlayout";
import Notfound from "./Notfound";
import Nav from "./components/navComponent/Nav";
import Cart from "./pages/user/Cart";
import Footer from "./components/Footer";
const App = () => {
  localStorage.theme = "light";
  return (
    <div className="  ">
      <Nav />
      <Routes>
        <Route path="/*" element={<Userlayout />}></Route>
        <Route path="/admin/*" element={<Adminlayout />}></Route>
        <Route path="*" element={<Notfound />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

import React from "react";
import { Route, Routes } from "react-router-dom";
import Userlayout from "./Userlayout";
import Adminlayout from "./Adminlayout";
import Notfound from "./Notfound";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/*" element={<Userlayout />}></Route>
        <Route path="/admin/*" element={<Adminlayout />}></Route>
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;

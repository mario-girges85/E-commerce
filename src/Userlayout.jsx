
import React from "react";
import { Route, Routes } from "react-router-dom";
import Notfound from "./Notfound";
import Home from "./pages/user/Home";
import Cart from "./pages/user/Cart";
import LogIn from './pages/register_login_pages/LogIn'
import SignUp from './pages/register_login_pages/SignUp'
import Mainproducts from "./pages/products/Mainproducts";
const Userlayout = () => {
    return (
        <div>
            <Routes>
                <Route path="*" element={<Notfound />} />
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/products" element={<Mainproducts />} />
                <Route path='/login' element={<LogIn />}/>
			        	<Route path ='signup' element={<SignUp />} />
            < /Routes>
        </div>
    );
};



export default Userlayout;

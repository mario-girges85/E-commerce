import React from "react";
import logo from "../../pages/images/logo.ico";
const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <img src={logo} alt="logo" className="size-10" />
      <h1>Click store</h1>
    </div>
  );
};

export default Logo;

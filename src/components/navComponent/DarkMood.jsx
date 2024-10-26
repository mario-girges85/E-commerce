import { Typography, MenuItem } from "@material-tailwind/react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import { Button } from "@material-tailwind/react";

const DarkMood = () => {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  return mode == "light" ? (
    <div className="  justify-center flex  items-center hover:bg-blue-gray-100 p-2 rounded-md    ">
      <MoonIcon
        variant="outlined"
        className="flex items-center cursor-pointer  w-fit h-7 text-blue-gray-500 md:ml-0"
        onClick={() => {
          setMode("dark");
          localStorage.theme = "dark";
        }}
      />
    </div>
  ) : (
    <div className="justify-center flex  items-center hover:bg-blue-gray-100 p-2 rounded-md hover:text-white ">
      <SunIcon
        variant="outlined"
        className="flex items-center cursor-pointer  w-fit h-7  text-maincolor md:ml-0 "
        onClick={() => {
          setMode("light");
          localStorage.theme = "light";
        }}
      />
    </div>
  );
};

export default DarkMood;

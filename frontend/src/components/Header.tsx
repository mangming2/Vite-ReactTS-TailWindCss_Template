import React from "react";
import NavBar from "./NavBar";

function Header() {
  return (
    <div className="bg-gray-800 flex justify-between  ">
      <img
        src="https://i.imgur.com/1Q1Z1Zy.png"
        className="w-16 h-16"
        alt="logo"
      />
      <NavBar />
    </div>
  );
}

export default Header;

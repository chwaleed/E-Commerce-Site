import React from "react";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [menu, setMenu] = useState("shop");
  function menuChanger() {
    return ` before:absolute cursor-pointer before:bottom-0 before:w-full before:h-[0.1em] before:bg-red-600 before:content-[''] relative`;
  }
  return (
    <>
      <div className=" w-full flex border-b-[1px] border-solid border-[#515151] h-[5em] px-[4em] items-center justify-between">
        <img src={logo} alt="Logo" />
        <div className="">
          <ul className="flex text-[#515151] text-[1.2em] gap-[2em] align-center">
            <li
              onClick={() => {
                setMenu("shop");
              }}
              className={menu === "shop" ? menuChanger() : "cursor-pointer"}
            >
              <Link to=""> Shop</Link>
            </li>
            <li
              onClick={() => {
                setMenu("Kids");
              }}
              className={menu === "Kids" ? menuChanger() : "cursor-pointer"}
            >
              <Link to="/kids">Kids</Link>
            </li>
            <li
              onClick={() => {
                setMenu("men");
              }}
              className={menu === "men" ? menuChanger() : "cursor-pointer"}
            >
              <Link to="/men">Men</Link>
            </li>
            <li
              onClick={() => {
                setMenu("women");
              }}
              className={menu === "women" ? menuChanger() : "cursor-pointer"}
            >
              <Link to="/women">Women</Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-[2em]">
          <Link to="/login">
            <button className="border-[1px] text-[#515151] cursor-pointer border-solid bg-white active:bg-[#f3f3f3] rounded-[2em] border-black px-[1.5em] py-[0.5em] ">
              Log In
            </button>
          </Link>

          <div className="flex">
            <Link to="/cart">
              {" "}
              <img className="h-[2em] " src={cart_icon} alt="CartIcon" />{" "}
            </Link>
            <div className="bg-red-600 text-white rounded-[50%] h-[1em] w-[1em] text-[0.8em] font-[600] p-[0.6em] flex items-center mt-[-0.2em] ml-[-0.6em] justify-center ">
              1
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;

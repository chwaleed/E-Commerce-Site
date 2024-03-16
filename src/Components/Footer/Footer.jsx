import React from "react";
import footer_logo from "../Assets/logo_big.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pintester_icon from "../Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/whatsapp.png";

function Footer() {
  return (
    <>
      <div className="w-full flex items-center flex-col">
        <div className="flex gap-[1em]  items-center">
          <img src={footer_logo} alt="" />
          <p className="text-[2em] font-[600]">SHOPPER</p>
        </div>
        <ul className="flex gap-[2em] text-[#515151] mt-[2em]">
          <li>Company</li>
          <li>Products</li>
          <li>Offices</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="flex mt-[2em] gap-[2em]">
          <div className="border-[1px] bg-slate-50 p-[0.5em]">
            <img src={instagram_icon} alt="" />
          </div>
          <div className="border-[1px] bg-slate-50 p-[0.5em]">
            <img src={pintester_icon} alt="" />
          </div>
          <div className="border-[1px] bg-slate-50 p-[0.5em]">
            <img src={whatsapp_icon} alt="" />
          </div>
        </div>
        <div className="w-full flex flex-col items-center mt-[3em]">
          <hr className="w-[80%] h-[4px] bg-[#515151]" />
          <p className="my-[1.5em] text-[#515151]">
            Copyright @ 2024 - All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;

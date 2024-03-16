import React from "react";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";

function Hero() {
  return (
    <>
      <div className="h-[90vh] w-full bg-gradient-to-b from-[#fde1ff] via-transparent to-[#e1ffea22] flex">
        <div className="w-[50%]  flex flex-col items-center justify-center ">
          <div>
            <h1 className=" text-[1.4em] font-semibold mb-[0.2em]">
              New Arrivals Only
            </h1>
            <div className="leading-[1]">
              <h1 className="flex text-[4em] font-[600] items-center">
                new
                <span className=" ml-[0.2em] flex items-center justify-center h-[0.8em]">
                  <img className=" w-[1em] " src={hand_icon} alt="" />
                </span>
              </h1>
              <h1 className="text-[4em] font-[600]">collection</h1>
              <h1 className="text-[4em] font-[600]">for everyone</h1>
            </div>
            <button className="group bg-[#ff4141] mt-[1.5em] hover:img:rotate-180 flex gap-[1em] items-center text-white px-[1.2em] py-[0.6em] rounded-[2em] ">
              Leatest Collection{" "}
              <span className="group-hover:rotate-90">
                <img className="w-[1.2em]" src={arrow_icon} alt="" />
              </span>
            </button>
          </div>
        </div>
        <div className="flex items-center justify-end">
          <img className="w-[70%]" src={hero_image} alt="" />
        </div>
      </div>
    </>
  );
}

export default Hero;

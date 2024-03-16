import React from "react";
import exclusive_image from "../Assets/exclusive_image.png";

function Offers() {
  return (
    <>
      <div className="w-full mt-[5%] h-[70vh]  flex justify-center items-center">
        <div className=" bg-gradient-to-b from-[#fde1ff] via-transparent to-[#e1ffea22] w-[80%] h-[85%]  flex items-center justify-between">
          <div className="ml-[6em]">
            <h1 className="text-[3.2em] font-[600] ">Exclusive</h1>
            <h1 className="text-[3.2em] font-[600]">Offers For You</h1>
            <h1 className="text-[1.2em] font-[500]">
              Only on best sellers products
            </h1>
            <button className="px-[2.4em] py-[0.6em] mt-[1em] rounded-[2em] bg-[red] ">
              Check Now
            </button>
          </div>
          <div>
            <img className="w-[80%] " src={exclusive_image} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Offers;

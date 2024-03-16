import React from "react";
import arrow_icon from "../Assets/breadcrum_arrow.png";

export const Breadcrums = (props) => {
  const { products } = props;
  return (
    <>
      <div className="flex gap-[0.4em] items-center">
        Home <img className=" h-[1em]" src={arrow_icon} alt="" /> Shop{" "}
        <img className=" h-[1em]" src={arrow_icon} alt="" /> {products.category}{" "}
        <img className=" h-[1em]" src={arrow_icon} alt="" /> {products.name}
      </div>
    </>
  );
};

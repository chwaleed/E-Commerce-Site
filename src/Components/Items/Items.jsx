import React from "react";
import TestImage from "../Assets/product_1.png";
import { Link } from "react-router-dom";

export default function Items(props) {
  return (
    <>
      <div className="w-[20%] hover:scale-[1.05] transition-[0.6s] ">
        <Link onClick={window.scrollTo(0, 0)} to={`/products/${props.id}`}>
          <img src={props.image} alt="" />
        </Link>
        <p className="my-[0.5em]">{props.name}</p>
        <div className="flex gap-[1em]">
          <div className="text-[#374151] text-[1.3em] font-[600] ">
            ${props.new_price}
          </div>
          <div className="text-[#8c8c8c] line-through text-[1.3em] font-[500] ">
            ${props.old_price}
          </div>
        </div>
      </div>
    </>
  );
}

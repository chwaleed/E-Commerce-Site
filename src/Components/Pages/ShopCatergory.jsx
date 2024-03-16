import React, { useContext } from "react";
import { Contaxt } from "../Context/Context";
import dropdown_icon from "../Assets/dropdown_icon.png";
import Items from "../Items/Items";

function ShopCatergory(props) {
  const { all_products } = useContext(Contaxt);
  return (
    <>
      <div>
        <img className="my-[1px] mx-auto" src={props.banner} alt="" />
        <div className=" px-[7%] mt-[1.4em] flex justify-between">
          <div className="inline-block">
            <span className="font-bold mr-[1em]">Showing 1-12</span> Out of 36
            Products
          </div>
          <div className=" flex items-center border-[1px] py-[0.3em] px-[0.8em] rounded-[2em] gap-[0.4em] ">
            Sort by <img className="h-[0.4em]" src={dropdown_icon} alt="" />
          </div>
        </div>
        <div className="flex flex-wrap mb-[6%] justify-center mt-[1.5em] gap-[2em]">
          {all_products.map((item, index) => {
            if (props.category === item.category) {
              return (
                <Items
                  Key={index}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
        <div className="flex justify-center">
          <button className="border-[1px] mb-[5%] px-[1.5em] py-[0.4em] rounded-[2em] bg-[#ededed] text-[#787878]">
            Explore More
          </button>
        </div>
      </div>
    </>
  );
}

export default ShopCatergory;

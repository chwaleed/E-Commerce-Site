import React, { useContext } from "react";
import { Contaxt } from "../Context/Context";
import remvoe_icon from "../Assets/cart_cross_icon.png";

function CartItems() {
  const { all_products, cartItems, removeToCart } = useContext(Contaxt);

  return (
    <>
      <div className="px-[7%] py-[5%] ">
        <div className="flex items-center text-[1.1em] font-bold p-[0.7em] ">
          <p>Products</p>
          <p className="ml-[4em] ">Title</p>
          <p className="ml-[25%]">Price</p>
          <p className="ml-[13%]">Quantity</p>
          <p className="ml-[13%]">Total</p>
          <p className="ml-[14%]">Remove</p>
        </div>
        <hr className="bg-[#e2e2e2] h-[3px] " />
        {all_products.map((items) => {
          if (cartItems[items.id] > 0) {
            return (
              <div>
                <div className="flex items-center">
                  <img className="w-[4em] py-[1em] " src={items.image} alt="" />
                  <p className="w-[22%]  ml-[5em] ">{items.name} </p>
                  <p className="ml-[6.5%] ">${items.new_price} </p>
                  <button className="ml-[15%] border-[2px] bg-[#fff] px-[1em] py-[0.5em]">
                    {cartItems[items.id]}{" "}
                  </button>
                  <p className="ml-[15%]">
                    ${items.new_price * cartItems[items.id]}{" "}
                  </p>
                  <img
                    className="ml-[16%]"
                    src={remvoe_icon}
                    onClick={() => {
                      removeToCart(items.id);
                    }}
                    alt=""
                  />
                </div>
                <hr className="bg-[#e2e2e2] h-[3px] " />
              </div>
            );
          }
          return null;
        })}
      </div>
    </>
  );
}

export default CartItems;

import React, { useContext } from "react";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { Contaxt } from "../Context/Context";

function ProductDisplay(props) {
  const { products } = props;
  const { addToCart } = useContext(Contaxt);
  return (
    <>
      <div className="flex  h-[70vh] w-full">
        <div className="flex w-[70%]  ">
          <div className="flex justify-evenly gap-[0em]  ">
            <div className="flex justify-center items-center w-[21%]  h-[100%]  w- flex-col gap-[1em] ">
              <img className="w-[70%]" src={products.image} alt="" />
              <img className="w-[70%]" src={products.image} alt="" />
              <img className="w-[70%]" src={products.image} alt="" />
              <img className="w-[70%]" src={products.image} alt="" />
            </div>
            <div className="w-80% ml-[-2.4em] ">
              <img className="h-full " src={products.image} alt="" />
            </div>
          </div>
        </div>
        <div className="w-[70%]">
          <h1 className="text-[1.5em] font-bold ">{products.name} </h1>
          <div className="flex items-center mt-[0.4em] gap-[0.3em]">
            <img className=" h-full" src={star_icon} alt="" />
            <img className=" h-full" src={star_icon} alt="" />
            <img className=" h-full" src={star_icon} alt="" />
            <img className=" h-full" src={star_icon} alt="" />
            <img className=" h-full" src={star_dull_icon} alt="" />
            <p>(69)</p>
          </div>
          <div className="flex text-[1.3em] gap-[1em] mt-[1.5em] font-bold">
            <h1 className="text-[#656565] line-through ">
              ${products.old_price}
            </h1>
            <h1 className="text-[#ff4141]">${products.new_price}</h1>
          </div>
          <p className="mt-[1.2em]">
            We will create the Home page where we will display the trending
            products, offer banner, newsletter subscription form, then we will
            make product page for men's category, women's category and kids
            category.{" "}
          </p>
          <div className="mt-[1.5em]">
            <h1 className="text-[1.2em] font-bold">Select Size</h1>
            <div className="flex mt-[1em] gap-[1em]">
              <div className="px-[1em] border-[1px] py-[0.5em] border-solid border-[#ebebeb] cursor-pointer  bg-[#fbfbfb]">
                S
              </div>
              <div className="px-[1em] py-[0.5em] border-[1px] border-solid border-[#ebebeb] cursor-pointer bg-[#fbfbfb]">
                M
              </div>
              <div className="px-[1em] py-[0.5em] border-[1px] border-solid border-[#ebebeb] cursor-pointer bg-[#fbfbfb]">
                L
              </div>
              <div className="px-[1em] py-[0.5em] border-[1px] border-solid border-[#ebebeb] cursor-pointer bg-[#fbfbfb]">
                XL
              </div>
              <div className="px-[1em] py-[0.5em] border-[1px] border-solid border-[#ebebeb] cursor-pointer bg-[#fbfbfb]">
                XXL
              </div>
            </div>
          </div>
          <button
            onClick={() => {
              addToCart(products.id);
            }}
            className="px-[1em] py-[0.6em] text-white bg-[#ff4141] mt-[1.5em] border-none outline-none cursor-pointer"
          >
            Add to Cart
          </button>
          <p className="mt-[1em]">
            <span className="font-bold mr-1">Category :</span> Women, T-Shirt,
            Crop Top
          </p>
          <p className="mt-[0.2em]">
            <span className="font-bold mr-1">Tags :</span> Modern, Leatest
          </p>
        </div>
      </div>
    </>
  );
}

export default ProductDisplay;

import React from "react";
import data_product from "../Assets/data";
import Items from "../Items/Items";

export default function RelatedProducts() {
  return (
    <>
      <div>
        <div className="flex flex-col mt-[6%] items-center">
          <h1 className="text-[1.7em] font-[600] ">Related Products</h1>
          <hr className="w-[16%] h-[0.4em] bg-black" />
          <div className=" flex flex-wrap justify-center mt-[6em] mb-[3em] gap-[2em]">
            {data_product.map((item, index) => {
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
            })}
          </div>
        </div>
      </div>
    </>
  );
}

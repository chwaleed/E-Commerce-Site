import React from "react";
import data_products from "../Assets/data";
import Items from "../Items/Items";

function Popular() {
  return (
    <>
      {" "}
      <div className="flex flex-col  items-center">
        <h1 className="text-[2em]">POPULAR IN WOMEN</h1>
        <hr className="w-[22%] h-[0.3em] rounded-[2em] bg-[#515151]" />
        <div className="flex flex-wrap justify-center mt-[3em] gap-[2em]">
          {data_products.map((item, index) => {
            return (
              <Items
                key={index}
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
    </>
  );
}

export default Popular;

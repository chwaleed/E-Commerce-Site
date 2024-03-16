import React from "react";
import new_collections from "../Assets/new_collections";
import Items from "../Items/Items";

function NewCollections() {
  return (
    <>
      <div className="flex mt-[5%] flex-col  items-center">
        <h1 className="text-[2em]">New Collections</h1>
        <hr className="w-[15%] h-[0.3em] rounded-[2em] bg-[#515151]" />
        <div className="flex flex-wrap justify-center mt-[3em] gap-[2em]">
          {new_collections.map((item, index) => {
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
    </>
  );
}

export default NewCollections;

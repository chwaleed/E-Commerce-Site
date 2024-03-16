import React, { useContext } from "react";
import { Contaxt } from "../Context/Context";
import { useParams } from "react-router-dom";
import { Breadcrums } from "../Breadcrums/Breadcrums";
import ProductDisplay from "../ProductDisplay/ProductDisplay";
import DescriptionBox from "../DescriptionBox/DescriptionBox";
import RelatedProducts from "../RelatedProducts/RelatedProducts";

function Products() {
  const { all_products } = useContext(Contaxt);
  const { productId } = useParams();
  const product = all_products.find((e) => e.id === Number(productId));
  return (
    <div className="px-[7%] py-[3%] flex flex-col gap-[2em]">
      <Breadcrums products={product} />
      <ProductDisplay products={product} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  );
}

export default Products;

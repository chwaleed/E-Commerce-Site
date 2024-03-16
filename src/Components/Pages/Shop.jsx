import React from "react";
import Hero from "../Hero/Hero";
import Popular from "../Popular/Popular";
import Offers from "../Offers/Offers";
import NewCollections from "../NewCollections/NewCollections";
import NewLatter from "../NewLatter/NewLatter";

function Shop() {
  return (
    <>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewLatter />
    </>
  );
}

export default Shop;

import React from "react";
import { item } from "./item/item";

export const itemList = ({ products }) => {
  return products.map((product) => (
    <item key={product.id} producto={product} />
  ));
};

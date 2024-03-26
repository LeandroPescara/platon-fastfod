import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../data/data";
import { itemList } from "../itemList/itemList";

export const itemListContainer = (props) => {
  const { idCategory } = useParams();
  console.log(idCategory);

  const [myProducts, setMyProducts] = useState([]);
  const myPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1500);
  });
  useEffect(() => {
    myPromise.then((data) => {
      setMyProducts(
        idCategory ? data.filter((prod) => prod.category === idCategory) : data
      );
    });
  }, [idCategory]);

  return (
    <div className="container--cards">
      <itemList products={myProducts} />
    </div>
  );
};

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../data/data";
import { itemDetail } from "../itemDetail/itemDetail";

export const itemDetailContainer = () => {
  const { idItem } = useParams();
  console.log(idItem);

  const [myProduct, setMyProduct] = useState({});
  const myPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1500);
  });
  useEffect(() => {
    myPromise.then((data) => {
      setMyProduct(data.find((prod) => prod.id === idItem));
    });
  }, [idItem]);

  return (
    <div>
      <itemDetail prod={myProduct} />
    </div>
  );
};

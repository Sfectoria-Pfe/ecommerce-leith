import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../../store/products";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const dispatch = useDispatch();
  const programStore=useSelector(store=>store.products)
  const { id } = useParams();
  

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [dispatch]);

  return (
    <div>
      <h1>{programStore.product?.title}</h1>
    </div>
  );
}

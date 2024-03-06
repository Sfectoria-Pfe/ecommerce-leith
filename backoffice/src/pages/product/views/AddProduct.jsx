import { Button } from "bootstrap";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { sendProduct } from "../../../store/products";
import { useNavigate } from "react-router-dom";

export default function AddProduct() {
  const [product, setProduct] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: name === "price" ? +value : value });
  };
  console.log(product);
  return (
    <div>
      add product
      <div className="d-flex gap-2 p-3">
        <input
          className="form-control"
          placeholder="title"
          name="title"
          onChange={handleChange}
        />
        <input
          className="form-control"
          placeholder="image"
          name="imageURL"
          onChange={handleChange}
        />
        <input
          className="form-control"
          placeholder="description"
          name="description"
          onChange={handleChange}
        />
        <input
          className="form-control"
          placeholder="price"
          name="price"
          type="number"
          min={0}
          onChange={handleChange}
        />
        <input
          className="form-control"
          placeholder="category"
          name="category"
          type="text"
          onChange={handleChange}
        />
      </div>
      <button
        className="btn btn-warning"
        onClick={() => {
          dispatch(sendProduct(product)).then((res) => {
            if (!res.error) navigate(-1);
          });
        }}
      >
        SEND
      </button>
    </div>
  );
}
// obj={
// x:1
// }
// obj={}
// obj.x=1
// obj['x']=1

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function OneProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(useParams());

  const [state, setState] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getMyProduct();
  }, []);

  const getMyProduct = async () => {
    try {
      const response = await axios.get(`http://localhost:3100/product/${id}`);
      setState(response.data);
      setIsLoading(false);
    } catch (error) {
      navigate("/*");
    }
  };

  return (
    <div>
      <h1 id="contained-modal-title-vcenter">{state.productName}</h1>
      <h3>{state.category}</h3>
      <div className="d-flex p-2 justify-content-between flex-wrap">
        <div>
          <img src={state.imageURL} alt="" />
        </div>
        <div>
          <h5>Description</h5>
          <p>{state.description}</p>
          <h4>price :{state.price} £</h4>
        </div>
      </div>
    </div>
  );
}

export default OneProduct;

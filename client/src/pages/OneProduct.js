import axios from 'axios';
import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom';

function OneProduct() {
  const {id}=useParams()

  const [state,setState]=useState({
  })
  
  useEffect(() => {
   oneproduct();
  }, []);

  const oneproduct = async () => {
    try {
      let response = await axios.get("http://localhost:3100/api/v1/products/"+id);
      setState(response.data );
      console.log(response.data);
    } catch {
      <p>Ty thabet fel id</p>;
    }
  };
  
  return (
    <div
       
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered="true"
      >
          {state.productname}
       
          <div><img src={state.imageURL} alt="" /></div>
          <div>
            <h5>Description</h5>
          <p>
          {state.description}
          </p>
          <h4>price :{state.price} £</h4>
          
          </div>
          
        
      </div>
  )
}

export default OneProduct

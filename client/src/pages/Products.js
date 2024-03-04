import React, { Component, useEffect, useState } from "react";
import Cards from "../component/cards/Card";
import Placeholder from "react-bootstrap/Placeholder";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { Button } from "react-bootstrap";

export default function Products(props) {
  const [state, setState] = useState({
    data: [],
    isLoading: true,
  }); // resultUseState=[state,setState]
console.log(useState);
  const [test, setTest] = useState(false);

  useEffect(() => {
    if (props.searchValue.length) SearchData();
    else getData();
  }, [props.searchValue]);

  const getData = async () => {
    try {
      await setState({ ...state, isLoading: true });
      let response = await axios.get("http://localhost:3100/api/v1/products/");
      setState({ data: response.data, isLoading: false });
    } catch {
      <p>you have an error</p>;
    }
  };
  const SearchData = async () => {
    try {
      await setState({ ...state, isLoading: true });

      let response = await axios.post("http://localhost:3100/search", {
        text: props.searchValue,
      });
      setState({ data: response.data, isLoading: false });
    } catch {
      <p>you have an error</p>;
    }
  };



  /*  const numberOfCarts = 10;
    const carts = Array.from({ length: numberOfCarts }, (_, index) => <Cards key={index} />); */
  return (
    
    <div style={{backgroundColor:"#F4FAFB",marginTop:"0.5rem"}} className="shadow p-4 mb-5  rounded p-2">
    <div className="d-flex justify-content-center py-5 align-items-center flex-wrap">
    <h1 style={{fontFamily:"Brittany Signature"}}>Our PRoducts</h1>
    <div style={{height:"5px", width: "80px", backgroundColor: "rgb(66, 177, 188)", marginRight: "42px" }} >
      </div>  
    </div>

      <div className="d-flex flex-wrap gap-5 p-2 justify-content-center">
      {state.isLoading === true ? (
        <>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Placeholder as={Card.Title} animation="glow">
                <Placeholder xs={6} />
              </Placeholder>
              <Placeholder as={Card.Text} animation="glow">
                <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
                <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
                <Placeholder xs={8} />
              </Placeholder>
              <Placeholder.Button variant="primary" xs={6} />
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Placeholder as={Card.Title} animation="glow">
                <Placeholder xs={6} />
              </Placeholder>
              <Placeholder as={Card.Text} animation="glow">
                <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
                <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
                <Placeholder xs={8} />
              </Placeholder>
              <Placeholder.Button variant="primary" xs={6} />
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Placeholder as={Card.Title} animation="glow">
                <Placeholder xs={6} />
              </Placeholder>
              <Placeholder as={Card.Text} animation="glow">
                <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
                <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
                <Placeholder xs={8} />
              </Placeholder>
              <Placeholder.Button variant="primary" xs={6} />
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Placeholder as={Card.Title} animation="glow">
                <Placeholder xs={6} />
              </Placeholder>
              <Placeholder as={Card.Text} animation="glow">
                <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
                <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
                <Placeholder xs={8} />
              </Placeholder>
              <Placeholder.Button variant="primary" xs={6} />
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Placeholder as={Card.Title} animation="glow">
                <Placeholder xs={6} />
              </Placeholder>
              <Placeholder as={Card.Text} animation="glow">
                <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
                <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
                <Placeholder xs={8} />
              </Placeholder>
              <Placeholder.Button variant="primary" xs={6} />
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Placeholder as={Card.Title} animation="glow">
                <Placeholder xs={6} />
              </Placeholder>
              <Placeholder as={Card.Text} animation="glow">
                <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
                <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
                <Placeholder xs={8} />
              </Placeholder>
              <Placeholder.Button variant="primary" xs={6} />
            </Card.Body>
          </Card>
        </>
      ) : (
        state.data.map((product) => (
          <Cards
            cartItems={props.cartItems}
            addToCart={props.addToCart}
            key={product.id}
            id={product.id}
            imge={product.imageURL}
            title={product.productName}
            decription={product.description}
            price={product.price}
          />
        ))
      )}
    </div>
</div>
    // <div className='d-flex gap-3 flex-wrap justify-content-center p-2'>{carts}</div>
  );
}
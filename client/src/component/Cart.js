import React, { Component } from "react";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

export default class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        {this.props.cartItems.map((item, index) => (
          <MDBCard key={index} style={{ maxWidth: "540px" }}>
            <MDBRow className="g-0">
              <MDBCol md="4">
                <MDBCardImage src={item.image} alt="..." fluid />
              </MDBCol>
              <MDBCol md="8">
                <MDBCardBody>
                  <MDBCardTitle>{item.title}</MDBCardTitle>
                  <MDBCardText>Price: {item.price}</MDBCardText>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        ))}
      </>
    );
  }
}

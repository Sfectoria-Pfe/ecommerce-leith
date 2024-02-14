import React, { Component } from "react";
// import { useState } from 'react';
import Offcanvas from "react-bootstrap/Offcanvas";

export default class Myproduct extends Component {
  constructor(props) {
    super();
  }

  render() {
    console.log(this.props);
    return (
      <>
        <Offcanvas
        show={this.props.show}
         onHide={this.props.handleClose}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {this.props.body}
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
}

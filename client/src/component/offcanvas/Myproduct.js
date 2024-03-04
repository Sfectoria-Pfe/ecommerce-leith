import React, { Component } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

export default class Myproduct extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <>
        <Offcanvas
        show={this.props.show}
         onHide={this.props.handleClose}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>{this.props.title}</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {this.props.body}
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
}

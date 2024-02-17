import React, { Component } from 'react'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default class Popuup extends Component {
  render() {
    return (
        <Modal
       show={this.props.show}
        onHide={this.props.handleClose} 
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          {this.props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='d-flex p-2 justify-content-between'>

          <div><img src={this.props.imge} alt="" /></div>
          <div>
            <h5>Description</h5>
          <p>
          {this.props.body}
          </p>
          <h4>price :{this.props.price} £</h4>
          
          </div>
          
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={()=>{this.props.handleClose()}} >Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

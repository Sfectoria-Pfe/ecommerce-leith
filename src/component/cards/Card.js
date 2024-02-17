import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Popuup from "../popup/Popuup";
import { IconButton, Snackbar } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';


export default class Cards extends Component {
  constructor(props) {
    super();
    this.state = {
      show: false,
      open: false


    };
    this.handleClose = this.handleClose.bind(this);
      this.handleAddToCart = this.handleAddToCart.bind(this); // Add this line

  }

  handleShow() {
    this.setState({ show: true });

  }

  handleClose() {
    this.setState({ show: false });
  }
  handleSnackbarClose= (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ open: false });
  };
  handleAddToCart() {
    this.props.addToCart({
      title: this.props.title,
      price: this.props.price,
      image: this.props.imge
    });
    this.setState({ open: true });


  }
 

  render() {
    const action = (
      
      <React.Fragment >
        <Button className="btn btn-success" size="small" onClick={this.handleSnackbarClose}>
          UNDO
        </Button>
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={this.handleSnackbarClose}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </React.Fragment>
    );
    const message=(
       <p className="text-success">successfully added</p>
    );

    return (
      <>
        <Card className="p-2" style={{ width: "18rem" }}>
        <Card.Title style={{ width: "16rem", height: "50px" }} >{this.props.title}</Card.Title>
          <Card.Body>
          <Card.Img variant="top" src={this.props.imge} style={{ width: "16rem", height: "200px" }} />

            <ListGroup className="list-group-flush">
              <ListGroup.Item>Price : {this.props.price}£</ListGroup.Item>
            </ListGroup>
            <div className="d-flex justify-content-between ">

            <Button variant="primary" onClick={() => this.handleShow()}>
              See more
            </Button>
            <Button
              variant="info"
              onClick={()=>this.handleAddToCart()}
              
            >
              Add
            </Button>
            </div>
          </Card.Body>
        </Card>

        <Popuup
          show={this.state.show}
          handleClose={this.handleClose}
          body={this.props.decription}
          title={this.props.title}
          price={this.props.price}
          imge={this.props.imge}
        />
           <div>
        <Snackbar 
          open={this.state.open}
          autoHideDuration={6000}
          onClose={this.handleSnackbarClose}
          message={message}
          action={action}
        />
      </div>
      </>
    );
  }
}

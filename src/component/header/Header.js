import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import { IconButton } from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Myproduct from "../offcanvas/Myproduct";

export default class Navig extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      showUser:false
    };
    this.handleClose=this.handleClose.bind(this)
    this.handleCloseUser=this.handleCloseUser.bind(this)
  }
  handleClose() {
    this.setState({ show: false });
  }
  handleCloseUser() {
    this.setState({ showUser: false });
  }
  handleShow() {
    this.setState({ show: true });
  }
  handleShowUser() {
    this.setState({ showUser: true });
  }

  render() {
    return (
      <Navbar expand="lg" className=" bg-body-tertiary ">
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              src="https://images.squarespace-cdn.com/content/v1/645e07defcc71e2167a143b1/5ce3d1b7-3545-4295-8008-2ff3a46ab75d/Leith+logo-yellow.png"
              alt="mylogo"
              width={50}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse
            id="navbarScroll"
            className="justify-content-between"
          >
            <div className="header__input">
              <SearchIcon />
              <input type="text" placeholder="Search Product" />
            </div>
            <Nav navbarScroll>
              <Nav.Link
                href="#action1"
                className="header__option header__option--active"
              >
                <HomeIcon fontSize="large" />
              </Nav.Link>
              <Nav.Link href="#action2" className="header__option">
                <StorefrontIcon fontSize="large" />
              </Nav.Link>

              <Nav.Link href="#action3" className="header__option">
                <SupervisedUserCircleIcon fontSize="large" onClick={()=>this.handleShowUser()} />
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#action11" className="header__option">
                <IconButton onClick={() => this.handleShow()}>
                  <AddShoppingCartIcon />
                </IconButton>
              </Nav.Link>
              <Nav.Link href="#action11" className="header__option">
                <IconButton>
                  <ExitToAppIcon />
                </IconButton>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <Myproduct show={this.state.show} handleClose={this.handleClose} body="cart and thank you" title="Cart" />
        <Myproduct show={this.state.showUser} handleClose={this.handleCloseUser} body="user and thank you" title="My profile" />
       
      </Navbar>
    );
  }
}
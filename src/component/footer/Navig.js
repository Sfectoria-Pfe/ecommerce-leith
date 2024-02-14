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
import Offcanvas from 'react-bootstrap/Offcanvas'
import Myproduct from "../offcanvas/Myproduct";

export default class Navig extends Component {
  render() {
    
    return (
      
      <Navbar expand="lg" className=" header bg-body-tertiary ">
        <Container fluid>
          <Navbar.Brand href="#" className="header__left">
            <img
              src="https://images.squarespace-cdn.com/content/v1/645e07defcc71e2167a143b1/5ce3d1b7-3545-4295-8008-2ff3a46ab75d/Leith+logo-yellow.png"
              alt="mylogo"
            />
            <div className="header__input">
              <SearchIcon />
              <input type="text" placeholder="Search Product" />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll"  />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 "
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <div className="header__middle ml-auto ">
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
                  <SupervisedUserCircleIcon fontSize="large" />
                </Nav.Link>
                <Nav.Link href="#action11" className="header__option" >
                  <IconButton 
                   onClick={handleShow}
                  >
                    <AddShoppingCartIcon />
                    <Myproduct/>
                    {/* <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas> */}
      
                  </IconButton>
                </Nav.Link>
                <Nav.Link href="#action11" className="header__option">
                  <IconButton>
                    <ExitToAppIcon />
                  </IconButton>
                </Nav.Link>
              </div>

            
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

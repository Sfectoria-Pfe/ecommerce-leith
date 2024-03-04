import React, { Component, useState } from "react";
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

import Cart from "../Cart";
import { Link, NavLink, useNavigate } from "react-router-dom";

export default function Navig(props) {
  const [state, setState] = useState({
    show: false,
    showUser: false,
  });
  const navigate = useNavigate();

  const handleClose = () => {
    setState({ ...state, show: false });
  };
  const handleCloseUser = () => {
    setState({ ...state, showUser: false });
  };
  const handleShow = () => {
    setState({ ...state, show: true });
  };
  const handleShowUser = () => {
    setState({ ...state, showUser: true });
  };

  return (
    <Navbar expand="lg" className=" bg-body-tertiary ">
      <Container fluid>
        <Navbar.Brand
          onClick={() => {
            navigate("/");
          }}
        >
          <img
            src="https://images.squarespace-cdn.com/content/v1/645e07defcc71e2167a143b1/5ce3d1b7-3545-4295-8008-2ff3a46ab75d/Leith+logo-yellow.png"
            alt="mylogo"
            width={50}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-between">
          <div className="header__input">
            <SearchIcon />
            <input
              type="text"
              placeholder="Search Product"
              onChange={(e) => {
                props.changeValueSearch(e);
              }}
            />
          </div>
          <Nav navbarScroll>
            <Nav.Link
              to="/home"
              as={NavLink}
              className="header__option header__option--active"
            >
              <HomeIcon fontSize="large" />
            </Nav.Link>
            <Link to="/allproducts" className="header__option nav-link">
              <StorefrontIcon fontSize="large" />
            </Link>

            <Nav.Link href="#action3" className="header__option">
              <SupervisedUserCircleIcon
                fontSize="large"
                onClick={() => handleShowUser()}
              />
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#action11" className="header__option">
              <IconButton onClick={() => handleShow()}>
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
      <Myproduct
        show={state.show}
        handleClose={handleClose}
        body={<Cart addToCart={props.addToCart} cartItems={props.cartItems} />}
        title="Cart"
      />
      <Myproduct
        show={state.showUser}
        handleClose={handleCloseUser}
        body={"My profile"}
        title="My profile"
      />
    </Navbar>
  );
}
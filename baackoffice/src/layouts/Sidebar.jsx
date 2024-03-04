import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Avatar } from "@mui/material";

export default function Sidebar({ siedebar, setSiedebar }) {

  return (
    <>
      <div className="navbar  d-flex justify-content-between">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={() => setSiedebar(!siedebar)} />
        </Link>
        <Avatar
          alt="Remy Sharp"
          style={{ width: "60px", height: "60px" }}
          src="https://yoolk.ninja/wp-content/uploads/2022/04/OnePiece-Monkey-D-Luffy-1024x819.png"
        />
      </div>
      <nav className={siedebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineClose onClick={() => setSiedebar(!siedebar)} />
            </Link>
          </li>

          <li className="nav-text">
            <Link to="/" className="btn btn-primary">
              <AiIcons.AiFillHome />
              <span>Home</span>
            </Link>
          </li>
          <li className="nav-text">
            <Link to="profile" className="btn btn-primary">
              <AiIcons.AiFillHome />
              <span>Profile</span>
            </Link>
          </li>
          
          <li className="nav-text">
            <Link to="/products" className="btn btn-primary">
              <FaIcons.FaCartPlus />
              <span>Products</span>
            </Link>
          </li>
          <li className="nav-text">
            <Link to="/orders" className="btn btn-primary">
              <IoIcons.IoIosPaper />
              <span>Orders</span>
            </Link>
          </li>
          
        </ul>
      </nav>
    </>
  );
}

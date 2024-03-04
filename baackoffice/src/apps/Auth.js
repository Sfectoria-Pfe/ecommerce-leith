import React from "react";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import { Outlet } from "react-router-dom";

export default function Auth() {
  return (
    <div>
      <Outlet/>
    </div>
  );
}

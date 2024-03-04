import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../apps/App";
import Auth from "../apps/Auth";
import Dashboard from "../pages/Dashboard";
import Product from "../pages/product/Product";
import NotFound from "../pages/NotFound";
import EditProduct from "../pages/product/views/EditProduct";
import Addproduct from "../pages/product/views/Addproduct";
import Productlist from "../pages/product/views/Productlist";
import EditProfile from "../pages/profile/views/EditProfile";
import ProfileDetails from "../pages/profile/views/ProfileDetails";
import Profile from "../pages/profile/Profile";
import ProductDetail from "../pages/product/views/ProductDetail";
import SignUp from "../pages/auth/SignUp";
import Login from "../pages/auth/Login";
import Order from "../pages/orders/Order";
import Orderlist from "../pages/orders/views/Orderlist";
export const UserContext = createContext();

export default function Router() {
  const [user, setUser] = useState({
    id: "1",
    userName: "Leith Manaa",
    country: "Tunisia",
    Age: "30",
    imageUrl:
      "https://pics.craiyon.com/2023-09-26/4c347c1b975b4d75b7ee7719704edc2b.webp",
    job: "BIG_DATA ingeneer",
    mail: "manaaleith62@gmail.com",
  });

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <Routes>
          {user ? (
            <Route path="/" element={<App />}>
              <Route index element={<Dashboard />} />
              <Route path="products" element={<Product />}>
                <Route index element={<Productlist />} />
                <Route path="add" element={<Addproduct />} />
                <Route path="edit:id" element={<EditProduct />} />
                <Route path=":id" element={<ProductDetail />} />
              </Route>
              <Route path="orders" element={<Order />}>
                <Route index element={<Orderlist />} />
              </Route>
              <Route path="profile" element={<Profile />}>
                <Route index element={<ProfileDetails />} />
                <Route path="edit" element={<EditProfile />} />
              </Route>
            </Route>
          ) : (
            <Route path="/" element={<Auth />}>
              <Route index element={<Login />} />
              <Route path="signUp" element={<SignUp />} />
            </Route>
          )}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

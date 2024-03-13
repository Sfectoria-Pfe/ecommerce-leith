import { configureStore } from "@reduxjs/toolkit";
import products from "./products";
import order from "./order";
import auth from "./auth";

export const store = configureStore({
  reducer: { products, order, auth },
});

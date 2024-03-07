import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
  const response = await axios.get("http://localhost:5000/api/v1/programs");
  return response.data;
});
export const fetchProduct = createAsyncThunk("fetchProduct", async (id) => {
  const response = await axios.get(
    "http://localhost:5000/api/v1/programs/" + id
  );
  return response.data;
});
export const sendProduct = createAsyncThunk("addProduct", async (body) => {
  const response = await axios.post(
    "http://localhost:5000/api/v1/programs/",
    body
  );
  return response.data;
});

export const counterSlice = createSlice({
  name: "products",
  initialState: {
    product: null,
    products: {
      items: [],
      count: 0,
    },
  },
  reducers: {
    
  },
  extraReducers(builder) {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products.items = action.payload;
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.product = action.payload;
    });
    builder.addCase(sendProduct.fulfilled, (state, action) => {
      state.product = action.payload;
    });
  },
});
export default counterSlice.reducer;
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Component } from "react";

import Header from "./component/header/Header";
import Products from "./pages/Products";
import Carousell from "./component/Carousel";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CheckOut from "./pages/CheckOut";
import OneProduct from "./pages/OneProduct";
import NotFound from "./pages/NotFound";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartItems: [],
      searchValue: "",
    };
    this.addToCart = this.addToCart.bind(this);
    this.changeSearchValue = this.changeSearchValue.bind(this);
  }
  addToCart = (product) => {
    this.setState((prevState) => ({
      cartItems: [...prevState.cartItems, product],
    }));
  };
  changeSearchValue(e) {
    this.setState({ searchValue: e.target.value });
  }

  render() {
    console.log(this.state.cartItems);

    return (
      <div className="App">
        <BrowserRouter>
          <Header
            addToCart={this.addToCart}
            changeValueSearch={this.changeSearchValue}
            cartItems={this.state.cartItems}
          />
          {/* <Carousell/> */}
          <Routes>
            <Route
              index
              element={
                <Products
                  searchValue={this.state.searchValue}
                  addToCart={this.addToCart}
                  cartItems={this.state.cartItems}
                />
              }
            />
            <Route path="checkout" element={<CheckOut />} />
            <Route path="product/:id" element={<OneProduct />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

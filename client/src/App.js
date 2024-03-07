import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Component } from "react";

import Header from "./component/header/Header";
import Carousell from "./component/Carousel";
import Products from "./pages/Products";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CheckOut from "./pages/CheckOut";
import OneProduct from "./pages/OneProduct";
import NotFound from "./pages/NotFound";
import Cartt from "./pages/Cartt";
import { ThemeProvider } from "styled-components";

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

    const theme = {
      colors: {
        heading: "rgb(24 24 29)",
        text: "rgba(29 ,29, 29, .8)",
        white: "#fff",
        black: " #212529",
        helper: "#8490ff",
    
        bg: "#F6F8FA",
        footer_bg: "#0a1435",
        btn: "rgb(98 84 243)",
        border: "rgba(98, 84, 243, 0.5)",
        hr: "#ffffff",
        gradient:
          "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
        shadow:
          "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
        shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
      },
      media: {
        mobile: "768px",
        tab: "998px",
      },
    }; 
    return (
      <div className="App">
            <ThemeProvider theme={theme}>
            
        <BrowserRouter>
          <Header
            addToCart={this.addToCart}
            changeValueSearch={this.changeSearchValue}
            cartItems={this.state.cartItems}
          />

          <Routes>
            <Route
              index
              element={
                <>
                  <Carousell />
                  <Products
                    searchValue={this.state.searchValue}
                    addToCart={this.addToCart}
                    cartItems={this.state.cartItems}
                  />
                </>
              }
            />
            <Route
              path="home"
              element={
                <>
                  <Carousell />
                  <Products
                    searchValue={this.state.searchValue}
                    addToCart={this.addToCart}
                    cartItems={this.state.cartItems}
                  />
                </>
              }
            />

            <Route path="checkout" element={<CheckOut />} />
            <Route path="cart" element={<Cartt/>} />
            <Route path="oneproduct/:id" element={<OneProduct />} />
            <Route
              path="allproducts"
              element={
                <Products
                  searchValue={this.state.searchValue}
                  addToCart={this.addToCart}
                  cartItems={this.state.cartItems}
                />
              }
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        </ThemeProvider>

      </div>
    );
  }
}

export default App;

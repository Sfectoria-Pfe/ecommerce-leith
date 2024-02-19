import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Component } from "react";

import Header from "./component/header/Header";
import Products from "./pages/Products";
import Carousell from "./component/Carousel";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartItems: [],
      searchValue: "",
    };
    this.addToCart = this.addToCart.bind(this);
    this.changeSearchValue=this.changeSearchValue.bind(this)
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
        <Header addToCart={this.addToCart} changeValueSearch={this.changeSearchValue} cartItems={this.state.cartItems} />
        {/* <Carousell/> */}

        <Products searchValue={this.state.searchValue} addToCart={this.addToCart} cartItems={this.state.cartItems} />
      </div>
    );
  }
}

export default App;


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Component } from 'react';

import Header from './component/header/Header';
import Products from './pages/Products';



class App extends Component{
  constructor(props) {
    super(props)
  
    this.state = {
      cartItems: []
    };
    this.addToCart = this.addToCart.bind(this);


  }
  addToCart = (product) => {
    this.setState(prevState => ({
      cartItems: [...prevState.cartItems, product]
    }));
  }
 render(){
  console.log(this.state.cartItems);

  return (
   
    <div className="App">
      
    <Header addToCart={this.addToCart} cartItems={this.state.cartItems}/> 

    <Products addToCart={this.addToCart }  cartItems={this.state.cartItems}/>
    </div>
    
  );
 }
  
}

export default App;

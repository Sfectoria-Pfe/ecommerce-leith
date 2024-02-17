import React, { Component } from 'react'

export default class Cart extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
    };


  }
 
  render() {
    
    return (
      <>
   
          {this.props.cartItems.map((item, index) => (
        <div key={index}>
             <p>************************</p>
          <p>{item.title}</p>
          <p>{item.price}</p>
          <img src={item.image} alt={item.title} />
          <p>************************</p>
        </div>
      ))}
      
      </>
    
      
    )
  }
}

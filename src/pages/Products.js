import React, { Component } from 'react'
import Cards from '../component/cards/Card'
import data from '../constants/data.json'

export default class Products extends Component {
    constructor(){
        super()
    }
    
 
   
  render() {
    console.log(data);
   /*  const numberOfCarts = 10;
    const carts = Array.from({ length: numberOfCarts }, (_, index) => <Cards key={index} />); */
    return (
         <div className='d-flex gap-3 flex-wrap justify-content-center p-2'>
        {data.map(product => (
          <Cards key={product.id} imge={product.imageURL} title={product.productName} decription={product.description} price={product.price} />
        ))}
      </div>

    // <div className='d-flex gap-3 flex-wrap justify-content-center p-2'>{carts}</div>
    )
  }
}

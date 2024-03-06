import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProducts } from '../../../store/products'
import { Link } from 'react-router-dom'

export default function ProductList() {
  const products = useSelector((state) => state.products.products.items)
  const dispatch = useDispatch()
useEffect(()=>{
dispatch(fetchProducts())
},[dispatch])
console.log(products,"state");
  return (
    <div>
      product list
      <Link to='add'>Add new product</Link>
    </div>
  )
}

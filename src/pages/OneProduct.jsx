import React from 'react'
import { useParams } from 'react-router-dom'

function OneProduct() {
    const {id}=useParams()
  return (
    <div>OneProduct {id}</div>
  )
}

export default OneProduct
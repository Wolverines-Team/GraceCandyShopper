import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const CardView = props => {
  const { product } = props

  return (
    <div className='card'>
      <img src={product.imageUrl} />
      <div className='producttext'>
        <Link to={`/products/${product.id}`}>
          <h2>{product.name}</h2>
        </Link>
        <h3>${product.price}</h3>
        <h4>{product.description}</h4>
      </div>
    </div>
  )
}
export default CardView

// Currently, we're just exporting the component as-is. When we're ready to
// hook it up to the redux store, we'll export the connected component by default:

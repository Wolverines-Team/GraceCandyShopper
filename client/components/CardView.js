import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const CardView = props => {
  const { product } = props

  return (
    <div className='card'>
      <Link to={`/products/${product.id}`}>
        <div className='card-img'>
          {product.images[0] ? (
            <img src={product.images[0].imageUrl} />
          ) : (
            <h1>No Image</h1>
          )}
        </div>
      </Link>
      <div className='productText'>
        <p>{product.name}</p>
        <p>{product.description}</p>
        <p>${product.price}</p>
      </div>
    </div>
  )
}
export default CardView

// Currently, we're just exporting the component as-is. When we're ready to
// hook it up to the redux store, we'll export the connected component by default:

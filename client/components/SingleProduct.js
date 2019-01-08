import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

mapStateToProps = state => {
  return { products: state.stock.products }
}

SingleProduct = props => {
  const { product } = props

  return (
    <div className='singleview'>
      <img src={product.imageUrl} />
      {/* <Images images={product.images} */}
      <div className='producttext'>
        <h4>{product.description}</h4>
      </div>
      {/* <Stars rating={product.averageReview} */}
      <h3>${product.price}</h3>
    </div>
  )
}

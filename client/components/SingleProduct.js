import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Reviews from './Reviews'
import Images from './Images'

const SingleProduct = props => {
  const [product] = props.products.filter(
    product => product.id == props.match.params.id
  )

  return (
    <div className='singleview'>
      <h1>{product.name}</h1>
      <Images images={product.images} />
      {/* <Images images={product.images} */}
      <div className='producttext'>
        <h4>{product.description}</h4>
      </div>
      {/* <Stars rating={product.averageReview} */}
      <h3>${product.price}</h3>
      <div className='reviews'>
        <Reviews ratings={product.ratings} />
      </div>
    </div>
  )
}

const mapStateToProps = state => ({ products: state.products })

export default connect(mapStateToProps)(SingleProduct)

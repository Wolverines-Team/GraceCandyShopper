
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Reviews } from './Reviews'

const SingleProduct = props => {
  console.log(props.match.params.id)
  console.log(props.products)
  const [product] = props.products.filter(
    product => product.id == props.match.params.id
  )
  console.log(product)

  return (
    <div className="singleview">
      <img src={product.imageUrl} />
      {/* <Images images={product.images} */}
      <div className="producttext">
        <h4>{product.description}</h4>
      </div>
      {/* <Stars rating={product.averageReview} */}
      <h3>${product.price}</h3>
      <div className='reviews'>
        <Reviews product={product} />
      </div>
    </div>

  )
}

const mapStateToProps = state => ({ products: state.products })

export default connect(mapStateToProps)(SingleProduct)

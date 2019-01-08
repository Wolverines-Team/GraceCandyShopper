import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

mapStateToProps = state => {
  return { products: state.stock.products }
}

class SingleProduct extends Component {
  constructor () {
    super()
    this.state = {
      name: '',
      price: 0,
      description: '',
      quantity: 0,
      category: '',
      brand: '',
      photosIds: []
    }
  }

  render () {
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
}

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
      <form>
        <h1>{product.name}</h1>
        <input
          className='input'
          type='text'
          onChange={evt => {
            this.setState({
              name: evt.target.value
            })
          }}
          value={this.state.name}
        />
        <img src={product.imageUrl[1]} />
        {/* <Images images={product.images} */}
        <div className='producttext'>
          <h4>{product.description}</h4>
        </div>
        <input
          className='input'
          type='text'
          onChange={evt => {
            this.setState({
              description: evt.target.value
            })
          }}
          value={this.state.description}
        />
        {/* <Stars rating={product.averageReview} */}
        <h3>${product.price}</h3>
        <input
          className='input'
          type='number'
          min='1'
          step='any'
          onChange={evt => {
            this.setState({
              price: evt.target.value
            })
          }}
          value={this.state.price}
        />
        {/* <button onclick={addToCart(product.id)}>Add To Cart</button> */}
        <h4>{product.quantity}</h4>
        <input
          className='input'
          type='number'
          onChange={evt => {
            this.setState({
              quantity: evt.target.value
            })
          }}
          value={this.state.quantity}
        />
      </form>
      <div className='reviews'>
        <Reviews product={product} />
      </div>
    </div>
  )
}

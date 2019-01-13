import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {
  addItem,
  postItems,
  updateItemQuantity,
  fetchItems
} from '../store/cart'
import { connect } from 'react-redux'
import { getCartIni } from '../store'

const CardView = props => {
  const addUp = id => {
    const qty = document.getElementsByName(`q${id}`)
    let value = Number(qty[0].value)
    qty[0].value = value + 1
  }
  const cutDown = id => {
    const qty = document.getElementsByName(`q${id}`)
    let value = Number(qty[0].value)
    if (value > 1) qty[0].value = value - 1
    else qty[0].value = 1
  }
  const submitResult = stockId => {
    const qty = document.getElementsByName(`q${stockId}`)
    const cartId = props.info.id
    const value = Number(qty[0].value)

    if (props.cart.filter(stock => stock.stockId === stockId)[0]) {
      const quantity =
        props.cart.filter(stock => stock.stockId === stockId)[0].quantity +
        value
      props.updateItemQuantity({
        stockId,
        cartId,
        quantity
        // price
      })
    } else {
      props.postItems(cartId, {
        stockId: id,
        cartId
        // price
      })
    }
  }

  const { product } = props
  // let firstId = product.images[0].id

  return (
    <div className='single-card-outline'>
      <div className='card'>
        <Link to={`/products/${product.id}`}>
          <div className='card-img'>
            <img src={product.images[0].imageUrl} />
          </div>
        </Link>
        <div className='productText'>
          <p>{product.name}</p>
          <p>{product.description}</p>
          <p>${product.price}</p>
        </div>
      </div>
      <div className='card-extend'>
        <div className='qty-bar'>
          <span className='qty-text'>QTY</span>
          <input
            type='text'
            className='qty'
            name={`q${product.id}`}
            defaultValue='1'
          />
          <span
            className='qty-sign'
            onClick={() => {
              cutDown(product.id)
            }}
          >
            -
          </span>
          <span
            className='qty-sign'
            onClick={() => {
              addUp(product.id)
            }}
          >
            +
          </span>
        </div>
        <button
          type='button'
          onClick={() => {
            submitResult(product.id, product.price)
          }}
        >
          <span>ADD TO BAG</span>
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  user: state.user,
  cart: state.cart,
  info: state.info
})

const mapDispatchToProps = dispatch => {
  return {
    postItems: (id, newItem) => dispatch(postItems(id, newItem)),
    updateItemQuantity: newItem => dispatch(updateItemQuantity(newItem)),
    getInfo: id => dispatch(getCartIni(id)),
    fetchItems: id => {
      dispatch(fetchItems(id))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardView)

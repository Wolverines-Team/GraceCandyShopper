import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchItems, newCart, getCartInfo } from '../store'

const ThankYou = props => {
  //   props.newCart(props.user.id)
  //   props.getCartInfo(props.user.id)
  //   props.getItems(props.info.id)
  return (
    <div className='spacer'>
      <h1>
        Thank you for your order{' '}
        {props.info.address ? props.info.address.firstName : ''}!
      </h1>
    </div>
  )
}

const mapStateToProps = state => ({
  items: state.cart,
  user: state.user,
  products: state.products.products,
  info: state.info
})

const mapDispatchToProps = dispatch => {
  return {
    getItems: cartId => dispatch(fetchItems(cartId)),
    newCart: userId => dispatch(newCart(userId)),
    getCartInfo: id => dispatch(getCartInfo(id))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ThankYou)

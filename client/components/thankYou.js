import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItems, newCart, getCartInfo } from '../store';

const ThankYou = props => {
  //   props.newCart(props.user.id)
  //   props.getCartInfo(props.user.id)

  return (
    <div className="outline">
      <div className="thankYou">
        <img src="https://raw.githubusercontent.com/juneidea/Candy/master/ThankYou.png" />
        <h1>
          Thank you for your order{' '}
          {props.info.address ? props.info.address.firstName : ''}!
        </h1>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  items: state.cart,
  user: state.user,
  products: state.products.products,
  info: state.info
});

const mapDispatchToProps = dispatch => {
  return {
    getItems: cartId => dispatch(fetchItems(cartId)),
    newCart: userId => dispatch(newCart(userId)),
    getCartInfo: id => dispatch(getCartInfo(id))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ThankYou);

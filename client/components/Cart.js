import React from 'react';
import {connect} from 'react-redux';
import {
  fetchItems,
  postItems,
  deleteItems,
  updateItemQuantity
} from '../store/cart';
import {Link} from 'react-router-dom';
import SingleProduct from './SingleProduct';

export const Cart = props => {
  const items = props.items || [];
  if (items.length === 0 || !items) {
    return (
      <div className="empty_cart">
        <h2>MY SHOPPING BAG</h2>
        <p>Your bag is empty, but it doesn't have to be!</p>
        <Link to="/">
          <button type="button"> GO TO HOME PAGE FOR SOME SWEETS!</button>
        </Link>
      </div>
    );
  }
  return (
    <div className="cart_container">
      <h1>MY BAG</h1>
      <button type="button"> CHECKOUT</button>
      <table id="cart_table">
        <tbody>
          <tr>
            <th> ITEM </th>
            <th> QUANTITY </th>
            <th> UNIT PRICE </th>
            <th> ITEM TOTAL</th>
          </tr>
          <tr>
            {items.map(item => (
              <SingleProduct
                key={item.id}
                item={item.name}
                quantity={item.quantity}
                price={item.price}
              />
            ))}
          </tr>
        </tbody>
      </table>
      <button type="button"> CHECKOUT</button>
    </div>
  );
};

const mapStateToProps = state => ({items: state.items});

const mapDispatchToProps = dispatch => {
  return {
    getItems: () => dispatch(fetchItems())
    // addItems: newItem => dispatch(postItems(newItem)),
    // removeItems: itemId => dispatch(deleteItems(itemId()))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
//export default Cart;

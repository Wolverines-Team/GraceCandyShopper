import React from 'react';
import {connect} from 'react-redux';
import {
  fetchItems,
  postItems,
  deleteItems,
  updateItemQuantity
} from '../store/cart';
import {Link} from 'react-router-dom';

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
    <body className="cart">
      <tr>
        <th> ITEM </th>
        <th> QUANTITY </th>
        <th> UNIT PRICE </th>
        <th> ITEM TOTAL</th>
      </tr>
    </body>
  );
};

export default Cart;

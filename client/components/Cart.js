import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchItems,
  postItems,
  deleteItems,
  updateItemQuantity
} from '../store';
import { Link } from 'react-router-dom';
import SingleProduct from './SingleProduct';

//Ozlem`s Note:
//For now we need to enter data hard coded as cart id, and for adding and seeing the current items in the cart we need to add first, comment it and call getItems(see ComponentDidMount( ) area )

export class Cart extends Component {
  constructor() {
    super();
    this.state = { quantity: 1 };
  }

  componentDidMount() {
    //so important make this cart id alive!!!
    // this.props.addItems(1, {stockId: 9, quantity: 12});
    //this.props.removeItems(5);
    this.props.getItems(5);
  }

  handleChange = item => {
    console.log('insisde handleChange==== item:?>>> ', item);
    this.props.updateQuantity(item);
  };

  render() {
    console.log('is this the props ===>', this.props);
    const items = this.props.items || [];
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
            {items.map(item => (
              <tr key={item.id}>
                <td>{item.stock.name}</td>
                <td>
                  <input
                    type="input"
                    defaultValue={item.quantity}
                    onChange={evt => {
                      item.quantity = Number(evt.target.value);
                    }}
                  />
                  <button
                    onClick={() => {
                      this.handleChange(item);
                    }}
                  >
                    {' '}
                    add{' '}
                  </button>
                </td>
                <td>{item.stock.price}</td>
                <td>
                  {Math.floor(item.quantity * item.stock.price * 100) / 100}
                </td>

                <button
                  onClick={() => {
                    this.props.removeItems(item.id);
                  }}
                >
                  remove
                </button>
              </tr>
            ))}
          </tbody>
        </table>
        <button type="button"> CHECKOUT</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({ items: state.cart });

const mapDispatchToProps = dispatch => {
  return {
    getItems: cartId => dispatch(fetchItems(cartId)),
    addItems: (cartId, newItem) => dispatch(postItems(cartId, newItem)),
    removeItems: itemId => dispatch(deleteItems(itemId)),
    updateQuantity: item => dispatch(updateItemQuantity(item))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
//export default Cart;

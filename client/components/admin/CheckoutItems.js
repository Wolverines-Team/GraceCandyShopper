import React, { Component } from 'react';
//import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { checkedOutCart } from '../../store';

export class CheckoutItems extends Component {
  componentDidMount() {
    this.props.checkedOut();
  }
  render() {
    console.log('Can I see any checkout cart item >>>>', this.props);
    const adminCart = this.props.adminCart || [];
    if (adminCart.length === 0 || !adminCart) {
      return (
        <div className="empty_admin_cart">
          <h2>NO BODY WANTS TO HAVE CANDY</h2>
        </div>
      );
    }
    return (
      <div className="admin_cart">
        <h1>All Purchased Items</h1>
        <table>
          <tbody>
            <tr>
              <th> Cart Id: </th>
              <th> Item Name: </th>
              <th> Quantity: </th>
              <th> Price: </th>
              <th> Shipping Status: </th>
            </tr>
            {adminCart.map(cart => {
              return (
                <tr key={cart.id}>
                  <td>{cart.cartId}</td>
                  <td>{cart.stock.name}</td>
                  <td>{cart.quantity}</td>
                  <td>{cart.stock.price}</td>
                  <td>
                    <select>
                      <option value="packaging">Packaging</option>
                      <option value="shipping">Shipping</option>
                      <option value="complete">Complete</option>
                    </select>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapState = state => {
  return {
    adminCart: state.adminCart
  };
};

const mapDispatch = dispatch => {
  return {
    checkedOut: () => dispatch(checkedOutCart())
  };
};
export default connect(mapState, mapDispatch)(CheckoutItems);

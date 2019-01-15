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
              <th> Cart No: </th>
              <th> Total Quantity: </th>
              <th> User Id: </th>
              <th> Shipping Status: </th>
            </tr>
            {adminCart.map(cart => {
              return (
                <tr key={cart.id}>
                  <td>{cart.id}</td>
                  <td>{cart.total_quantity}</td>
                  <td>{cart.userId}</td>
                  {/* <I will put some kind of button over here/> */}
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

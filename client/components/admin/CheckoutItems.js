import React, { Component } from 'react'
// import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { checkedOutCart, updatedStatus } from '../../store'
import cart from '../../store/cart'

export class CheckoutItems extends Component {
  constructor () {
    super()
    this.state = {
      status: {},
      orderId: 0
    }
  }

  componentDidMount () {
    this.props.checkedOut()
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevState.status.order_status !== this.state.status.order_status) {
      this.props.updatedStatus(this.state.status, this.state.orderId)
    }
  }
  handleChange = (evt, orderId) => {
    this.setState({
      status: { order_status: evt.target.value },
      orderId
    })
  }

  render () {
    const adminCart = this.props.adminCart || []
    if (adminCart.length === 0 || !adminCart) {
      return (
        <div className='empty_admin_cart'>
          <h2>NO BODY WANTS TO HAVE CANDY</h2>
        </div>
      )
    }
    return (
      <div className='admin_cart'>
        <h1>All Purchased Items</h1>
        <table>
          <tbody>
            <tr>
              <th> Cart Id: </th>
              <th> Item Name: </th>
              <th> Quantity: </th>
              <th> Price: </th>
              <th> Current Shipping Status: </th>
              <th />
            </tr>
            {adminCart.map(cart => {
              return (
                <tr key={cart.id}>
                  <td>{cart.cartId}</td>
                  <td>{cart.stock.name}</td>
                  <td>{cart.quantity}</td>
                  <td>{cart.stock.price}</td>
                  {/* <td>{cart.cart.order.order_status}</td> */}
                  <td>
                    <select
                      onChange={evt => {
                        this.handleChange(evt, cart.cart.order.cartId)
                      }}
                    >
                      <option value='packaging'>Packaging</option>
                      <option value='shipping'>Shipping</option>
                      <option value='complete'>Complete</option>
                    </select>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <div className='table-end' />
      </div>
    )
  }
}

const mapState = state => {
  return {
    adminCart: state.adminCart,
    order: state.order
  }
}

const mapDispatch = dispatch => {
  return {
    checkedOut: () => dispatch(checkedOutCart()),
    updatedStatus: (orderStatus, orderId) =>
      dispatch(updatedStatus(orderStatus, orderId))
  }
}
export default connect(
  mapState,
  mapDispatch
)(CheckoutItems)

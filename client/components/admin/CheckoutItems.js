import React, { Component } from 'react';
//import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchItems } from '../../store';

export class CheckoutItems extends Component {
  componentDidMount() {
    this.props.getItems();
  }
  render() {
    console.log('Can I see any checkout cart item >>>>', this.props);
    const item = this.props.cart;
  }
}

const mapState = state => {
  return {
    item: state.cart
  };
};

const mapDispatch = dispatch => {
  return {
    getItems: cart => dispatch(fetchItems(cart))
  };
};
export default connect(mapState, mapDispatch)(CheckoutItems);

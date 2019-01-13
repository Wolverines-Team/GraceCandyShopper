import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardView from './CardView';
import { fetchProducts, addItem } from '../store';
import SideBar from './SideBar';
import { Link } from 'react-router-dom';

class AllProducts extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    let products = this.props.products;
    return (
      <div className="outline">
        <SideBar />

        {this.props.user.isAdmin ? (
          <Link to="/newproduct">New Product</Link>
        ) : (
          <div />
        )}
        <div className="card-outline">
          {products.length ? (
            products.map(product => {
              return (
                <div key={product.id}>
                  <CardView product={product} history={props.history} />
                </div>
              );
            })
          ) : (
            <h1>No products!</h1>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.products,
  user: state.user,
  cart: state.cart
});

const mapDispatchToProps = dispatch => {
  return {
    addItem: newItem => dispatch(addItem(newItem))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts);

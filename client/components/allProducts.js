import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardView from './CardView';
import SideBar from './SideBar';
import fetchProductsWithCategory from '../store/products';

const AllProducts = props => {
  let products = props.products;
  return (
    <div className="outline">
      <div className="all-outline">
        <SideBar />
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
    </div>
  );
};

const mapStateToProps = state => ({
  products: state.products.products,
  cart: state.cart
});

const mapDispatchToProps = dispatch => {
  return {
    fetchProductsWithCategory: id => {
      dispatch(fetchProductsWithCategory(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts);

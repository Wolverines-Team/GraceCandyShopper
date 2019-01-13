<<<<<<< HEAD
import React, { Component } from 'react'
import { connect } from 'react-redux'
import CardView from './CardView'
import SideBar from './SideBar'

const AllProducts = props => {
  let products = props.products
  return (
    <div className='outline'>
      <div className='all-outline'>
        <SideBar />

        <div className='card-outline'>
=======
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
>>>>>>> 90e1e96b6a280c661b4cf78078423f29e0c2589d
          {products.length ? (
            products.map(product => {
              return (
                <div key={product.id}>
                  <CardView product={product} history={props.history} />
                </div>
              )
            })
          ) : (
            <h1>No products!</h1>
          )}
        </div>
      </div>
<<<<<<< HEAD
    </div>
  )
}

const mapStateToProps = state => ({
  products: state.products.products
})
=======
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.products,
  user: state.user,
  cart: state.cart
});
>>>>>>> 90e1e96b6a280c661b4cf78078423f29e0c2589d

const mapDispatchToProps = dispatch => {
  return {
    addItem: newItem => dispatch(addItem(newItem))
  }
}

<<<<<<< HEAD
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllProducts)
=======
export default connect(mapStateToProps, mapDispatchToProps)(AllProducts);
>>>>>>> 90e1e96b6a280c661b4cf78078423f29e0c2589d

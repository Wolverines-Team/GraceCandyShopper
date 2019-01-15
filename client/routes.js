import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  withRouter,
  Route,
  Switch,
  BrowserRouter as Router
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { Login, Signup, Navbar } from './components';
import { me, fetchItems, getCartInfo } from './store';
import {
  fetchProducts,
  fetchProductsByCategory,
  fetchCategories
} from './store/products';
import AllProducts from './components/allProducts';
import SingleProductAdmin from './components/admin/SingleProduct-Admin';
import SingleProduct from './components/SingleProduct';
import CategoryView from './components/categoryView';
import Cart from './components/Cart';
import createProduct from './components/admin/createProduct';

import welcomeBar from './components/welcomeBar';
import Checkout from './components/checkout';
import ThankYou from './components/thankYou';

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
    this.props.fetchProducts();
    this.props.getCartInfo(this.props.user.id);
  }
  componentDidUpdate(prevprops) {
    console.log(prevprops);
    if (this.props.info.id !== prevprops.info.id) {
      this.props.fetchItems(this.props.info.id);
    }
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <div>
        <Route path="/" component={Navbar} />
        <Route exact path="/products" component={AllProducts} />
        <Route exact path="/newproduct" component={createProduct} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/cart" component={Cart} />
        <Route path="/categories/:id" component={CategoryView} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/completed" component={ThankYou} />

        {this.props.user.isAdmin ? (
          <Route exact path="/products/:id" component={SingleProductAdmin} />
        ) : (
          <Route exact path="/products/:id" component={SingleProduct} />
        )}
        {isLoggedIn && (
          <Switch>
            <Route path="/home" component={welcomeBar} />
          </Switch>
        )}
        <Route path="/home" component={AllProducts} />
      </div>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: state.user.id,
    user: state.user,
    info: state.info
  };
};

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me());
    },
    fetchProducts: () => {
      dispatch(fetchProducts());
    },
    fetchProductsByCategory: id => {
      dispatch(fetchProductsByCategory(id));
    },
    fetchCategories: () => {
      dispatch(fetchCategories());
    },
    fetchItems: id => {
      dispatch(fetchItems(id));
    },
    getCartInfo: id => {
      dispatch(getCartInfo(id));
    }
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.number.isRequired
};

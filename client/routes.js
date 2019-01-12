import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Login, Signup, UserHome, Navbar } from './components';
import { me } from './store';
import { fetchProducts, fetchProductsByCategory } from './store/products';
import AllProducts from './components/allProducts';
import SingleProductAdmin from './components/admin/SingleProduct-Admin';
import SingleProduct from './components/SingleProduct';
import categoryView from './components/categoryView';
import Cart from './components/Cart';
import createProduct from './components/admin/createProduct';

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
    this.props.fetchProducts();
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
        <Route path="/categories/:id" component={categoryView} />

        {this.props.user.isAdmin ? (
          <Route exact path="/products/:id" component={SingleProductAdmin} />
        ) : (
          <Route exact path="/products/:id" component={SingleProduct} />
        )}
        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route path="/home" component={UserHome} />
          </Switch>
        )}
        {/* Displays our Login component as a fallback */}
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
    isLoggedIn: !!state.user.id,
    user: state.user
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
  isLoggedIn: PropTypes.bool.isRequired
};

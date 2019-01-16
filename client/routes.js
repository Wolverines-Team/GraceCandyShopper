import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Login, Signup, Navbar } from './components';
import {
  me,
  fetchItems,
  getCartInfo,
  fetchProducts,
  fetchProductsByCategory,
  fetchCategories,
<<<<<<< HEAD
  fetchUsers,
  fetchHistory
} from './store'
import AllProducts from './components/allProducts'
import SingleProductAdmin from './components/admin/SingleProduct-Admin'
import SingleProduct from './components/SingleProduct'
import CategoryView from './components/categoryView'
import Cart from './components/Cart'
import createProduct from './components/admin/createProduct'
import welcomeBar from './components/welcomeBar'
import Checkout from './components/checkout'
import ThankYou from './components/thankYou'
import userEdit from './components/admin/userEdit'
import History from './components/history'
=======
  fetchUsers
} from './store';
import AllProducts from './components/allProducts';
import SingleProductAdmin from './components/admin/SingleProduct-Admin';
import SingleProduct from './components/SingleProduct';
import CategoryView from './components/categoryView';
import Cart from './components/Cart';
import createProduct from './components/admin/createProduct';
import welcomeBar from './components/welcomeBar';
import Checkout from './components/checkout';
import ThankYou from './components/thankYou';
import userEdit from './components/admin/userEdit';
import Dashboard from './components/admin/Dashboard';
import AddImages from './components/admin/AddImages';
>>>>>>> 0b1bace5a617768ec69b73fef8bbb7ee5fe6e614

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.fetchUsers();
    this.props.loadInitialData();
    this.props.fetchProducts();
    this.props.getCartInfo(this.props.user.id);
  }
  componentDidUpdate(prevprops) {
    if (this.props.info.id !== prevprops.info.id) {
<<<<<<< HEAD
      this.props.fetchItems(this.props.info.id)
      this.props.fetchHistory(this.props.user.id)
=======
      this.props.fetchItems(this.props.info.id);
>>>>>>> 0b1bace5a617768ec69b73fef8bbb7ee5fe6e614
    }
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <div>
<<<<<<< HEAD
        <Route path='/' component={Navbar} />
        <Route exact path='/products' component={AllProducts} />
        <Route exact path='/newproduct' component={createProduct} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/cart' component={Cart} />
        <Route path='/categories/:id' component={CategoryView} />
        <Route exact path='/checkout' component={Checkout} />
        <Route exact path='/completed' component={ThankYou} />
        <Route exact path='/history' component={History} />
=======
        <Route path="/" component={Navbar} />
        <Route exact path="/products" component={AllProducts} />
        <Route exact path="/newproduct" component={createProduct} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/cart" component={Cart} />
        <Route path="/categories/:id" component={CategoryView} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/completed" component={ThankYou} />
>>>>>>> 0b1bace5a617768ec69b73fef8bbb7ee5fe6e614

        <Route exact path="/dashboard" component={Dashboard} />
        {this.props.user.isAdmin ? (
          <Route exact path="/products/:id" component={SingleProductAdmin} />
        ) : (
          <Route exact path="/products/:id" component={SingleProduct} />
        )}
        {this.props.user.isAdmin ? (
          <div>
            <Route exact path="/users/" component={userEdit} />
            <Route exact path="/addimages/:stockId" component={AddImages} />
          </div>
        ) : (
          <Route path="/home" component={welcomeBar} />
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
    },
    fetchUsers: () => {
<<<<<<< HEAD
      dispatch(fetchUsers())
    },
    fetchHistory: id => dispatch(fetchHistory(id))
  }
}
=======
      dispatch(fetchUsers());
    }
  };
};
>>>>>>> 0b1bace5a617768ec69b73fef8bbb7ee5fe6e614

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

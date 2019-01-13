<<<<<<< HEAD
import React, { Component } from 'react'
import { connect } from 'react-redux'
=======
import React, { Component } from 'react';
import { connect } from 'react-redux';
>>>>>>> 90e1e96b6a280c661b4cf78078423f29e0c2589d
import {
  withRouter,
  Route,
  Switch,
  BrowserRouter as Router
<<<<<<< HEAD
} from 'react-router-dom'
import PropTypes from 'prop-types'
import { Login, Signup, Navbar } from './components'
import { me, fetchItems, getCartInfo } from './store'
=======
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { Login, Signup, Navbar } from './components';
import { me, fetchItems, getCartInfo } from './store';
>>>>>>> 90e1e96b6a280c661b4cf78078423f29e0c2589d
import {
  fetchProducts,
  fetchProductsByCategory,
  fetchCategories
<<<<<<< HEAD
} from './store/products'
import AllProducts from './components/allProducts'
import SingleProductAdmin from './components/admin/SingleProduct-Admin'
import SingleProduct from './components/SingleProduct'
import CategoryView from './components/categoryView'
import Cart from './components/Cart'
import createProduct from './components/admin/createProduct'
import SideBar from './components/SideBar'
import Stripe from './components/stripe'
import welcomeBar from './components/welcomeBar'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount () {
    this.props.loadInitialData()
    this.props.fetchProducts()
    this.props.getCartInfo(this.props.user.id)
  }
  componentDidUpdate () {
    this.props.fetchItems(this.props.info.id)
  }

  render () {
    const { isLoggedIn } = this.props

    return (
      <div>
        <Route path='/' component={Navbar} />

        <Route exact path='/products' component={AllProducts} />
        <Route exact path='/newproduct' component={createProduct} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/cart' component={Cart} />
        <Route path='/categories/:id' component={CategoryView} />

        {this.props.user.isAdmin ? (
          <Route exact path='/products/:id' component={SingleProductAdmin} />
=======
} from './store/products';
import AllProducts from './components/allProducts';
import SingleProductAdmin from './components/admin/SingleProduct-Admin';
import SingleProduct from './components/SingleProduct';
import CategoryView from './components/categoryView';
import Cart from './components/Cart';
import createProduct from './components/admin/createProduct';
import SideBar from './components/SideBar';
import Stripe from './components/stripe';
import welcomeBar from './components/welcomeBar';
class Routes extends Component {
  render() {
    const { isLoggedIn } = this.props;

    return (
      <div>
        <Route path="/" component={Navbar} />
        <Route path="/products" component={SideBar} />
        <Route exact path="/products" component={AllProducts} />

        <Route path="/login" component={Login} />
        <Route path="/cart" component={Cart} />
        <Route path="/products/categories/:id" component={CategoryView} />

        {this.props.user.isAdmin ? (
          <div>
            <Route exact path="/products/:id" component={SingleProductAdmin} />
            <Route exact path="/newproduct" component={createProduct} />
          </div>
>>>>>>> 90e1e96b6a280c661b4cf78078423f29e0c2589d
        ) : (
          <Route exact path='/products/:id' component={SingleProduct} />
        )}
        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
<<<<<<< HEAD
            <Route path='/home' component={welcomeBar} />
=======
            <Route path="/home" component={welcomeBar} />
>>>>>>> 90e1e96b6a280c661b4cf78078423f29e0c2589d
          </Switch>
        )}
        <Route path="/home" component={Login} />
      </div>
    )
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
    user: state.user,
    info: state.info
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData () {
      dispatch(me())
    },
    fetchProducts: () => {
      dispatch(fetchProducts())
    },
    fetchProductsByCategory: id => {
<<<<<<< HEAD
      dispatch(fetchProductsByCategory(id))
    },
    fetchCategories: () => {
      dispatch(fetchCategories())
    },
    fetchItems: id => {
      dispatch(fetchItems(id))
    },
    getCartInfo: id => {
      dispatch(getCartInfo(id))
=======
      dispatch(fetchProductsByCategory(id));
    },
    fetchCategories: () => {
      dispatch(fetchCategories());
>>>>>>> 90e1e96b6a280c661b4cf78078423f29e0c2589d
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(
  connect(
    mapState,
    mapDispatch
  )(Routes)
)

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}

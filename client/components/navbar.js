import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import {Link} from 'react-router-dom'
import { logout } from '../store';
import { NavLink, withRouter } from 'react-router-dom';

const Navbar = props => {
  function candyCount(cart) {
    let count = 0;
    cart.forEach(stock => {
      count += stock.quantity;
    });
    return count;
  }
  const routeChange1 = () => {
    let path = '/products';
    props.history.push(path);
  };
  const routeChange4 = () => {
    let path = '/login';
    props.history.push(path);
  };
  const routeChange5 = () => {
    let path = '/cart';
    props.history.push(path);
  };

  return (
    <div className="outline">
      <div className="navRow">
        <div>
          <img src="./images/wLogo.png" className="wLogo" />
        </div>
        <div className="dropdown1">
          <button className="dropbtn1" onClick={routeChange1}>
            FIND YOUR SWEETS
          </button>
          <div className="dropdown-content1">
            <ul>
              <li />
            </ul>
            <div className="dropdown-list1">
              <ul>
                <li>
                  <a href="#">Candy</a>
                </li>
                <hr />
                <li className="thin">
                  <a href="#">New</a>
                </li>
                <li className="thin">
                  <a href="#">Sale!</a>
                </li>
                <li className="thin">
                  <a href="#">Lollipops</a>
                </li>
                <li className="thin">
                  <a href="#">Gold Collections</a>
                </li>
                <li className="thin">
                  <a href="#">Jelly Beans</a>
                </li>
              </ul>
            </div>

            <div className="dropdown-list1">
              <ul>
                <li>
                  <a href="#">Gummy</a>
                </li>
                <hr />
                <li className="thin">
                  <a href="#">Signature Filabelles</a>
                </li>
                <li className="thin">
                  <a href="#">Sour</a>
                </li>
                <li className="thin">
                  <a href="#">Novelty</a>
                </li>
                <li className="thin">
                  <a href="#">Rainbow</a>
                </li>
              </ul>
            </div>
            <div className="dropdown-list1">
              <ul>
                <li>
                  <a href="#">Chocolate</a>
                </li>
                <hr />
                <li className="thin">
                  <a href="#">Chocolate Bar</a>
                </li>
                <li className="thin">
                  <a href="#">Choc-a-Lot</a>
                </li>
                <li className="thin">
                  <a href="#">Fudge</a>
                </li>
                <li className="thin">
                  <a href="#">Candy Cafe Bites</a>
                </li>
                <li className="thin">
                  <a href="#">Hand Dipped</a>
                </li>
              </ul>
            </div>
            <div className="dropdown-list1">
              <ul>
                <li>
                  <a href="#">Collections</a>
                </li>
                <hr />
                <li className="thin">
                  <a href="#">Valentine's Day</a>
                </li>
                <li className="thin">
                  <a href="#">Chrismas</a>
                </li>
                <li className="thin">
                  <a href="#">City Collection</a>
                </li>
                <li className="thin">
                  <a href="#">Mean Girls</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="dropdown2">
          <button className="dropbtn2">STORE LOCATION</button>
          <div className="dropdown-content2">
            <a href="#">New York</a>
            <a href="#">Chicago</a>
            <a href="#">Miami</a>
            <a href="#">Los Angeles</a>
          </div>
        </div>
        <div className="dropdown3">
          <button className="dropbtn3">ABOUT US</button>
          <div className="dropdown-content3">
            <a href="#">About Us</a>
            <a href="#">Events</a>
            <a href="#">Inspiration</a>
          </div>
        </div>
        <div className="dropdown4">
          <button className="dropbtn4" onClick={routeChange4}>
            SIGN UP | LOGIN
          </button>
        </div>
        <div className="dropdown5">
          <button className="dropbtn5" onClick={routeChange5}>
            SHOPPING BAG
          </button>
          <div className="bag">
            <span>{props.cart[0] && candyCount(props.cart)}</span>
            <img src="./images/shoppingBag.png" id="bag" />
          </div>
        </div>
      </div>
    </div>
  );
};
/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    cart: state.cart
  };
};
const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout());
    }
  };
};
export default withRouter(connect(mapState, mapDispatch)(Navbar));
/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
};

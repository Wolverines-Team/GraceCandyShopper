import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
// import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = () => (
<div class="outline">
  <div class="navRow">
    <div><img src="./images/wLogo.png" class="wLogo" /></div>
    <div class="dropdown1">
      <button class="dropbtn1">FIND YOUR SWEETS</button>
      <div class="dropdown-content1">
        <ul>
          <li></li>
        </ul>
        <div class="dropdown-list1">
          <ul>
            <li><a href="#">Candy</a></li>
            <hr />
            <li class="thin"><a href="#">New</a></li>
            <li class="thin"><a href="#">Sale!</a></li>
            <li class="thin"><a href="#">Lollipops</a></li>
            <li class="thin"><a href="#">Gold Collections</a></li>
            <li class="thin"><a href="#">Jelly Beans</a></li>
          </ul>
        </div>

        <div class="dropdown-list1">
          <ul>
            <li><a href="#">Gummy</a></li>
            <hr />
            <li class="thin"><a href="#">Signature Filabelles</a></li>
            <li class="thin"><a href="#">Sour</a></li>
            <li class="thin"><a href="#">Novelty</a></li>
            <li class="thin"><a href="#">Rainbow</a></li>
          </ul>
        </div>
        <div class="dropdown-list1">
          <ul>
            <li><a href="#">Chocolate</a></li>
            <hr />
            <li class="thin"><a href="#">Chocolate Bar</a></li>
            <li class="thin"><a href="#">Choc-a-Lot</a></li>
            <li class="thin"><a href="#">Fudge</a></li>
            <li class="thin"><a href="#">Candy Cafe Bites</a></li>
            <li class="thin"><a href="#">Hand Dipped</a></li>
          </ul>
        </div>
        <div class="dropdown-list1">
          <ul>
            <li><a href="#">Collections</a></li>
            <hr />
            <li class="thin"><a href="#">Valentine's Day</a></li>
            <li class="thin"><a href="#">Chrismas</a></li>
            <li class="thin"><a href="#">City Collection</a></li>
            <li class="thin"><a href="#">Mean Girls</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="dropdown2">
      <button class="dropbtn2">STORE LOCATION</button>
      <div class="dropdown-content2">
        <a href="#">New York</a>
        <a href="#">Chicago</a>
        <a href="#">Miami</a>
        <a href="#">Los Angeles</a>
      </div>
    </div>
    <div class="dropdown3">
      <button class="dropbtn3">ABOUT US</button>
      <div class="dropdown-content3">
        <a href="#">About Us</a>
        <a href="#">Events</a>
        <a href="#">Inspiration</a>
      </div>
    </div>
    <div class="dropdown4">
      <button class="dropbtn4">SIGN UP | LOGIN</button>
    </div>
    <div class="dropdown5">
      <button class="dropbtn5">SHOPPING BAG</button>
      <div class="bag"><img src="./images/shoppingBag.png" id="bag" /></div>
    </div>
  </div>
</div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}

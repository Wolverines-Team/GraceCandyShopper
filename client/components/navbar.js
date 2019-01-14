import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';
import { NavLink, withRouter } from 'react-router-dom';
import { fetchProductsByCategory } from '../store/products';

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

  function sortCandy(stock, type) {
    let ans = [];
    for (let i = 0; i < stock.length; i++) {
      for (let j = 0; j < stock[i].categories.length; j++) {
        if (stock[i].categories[j].id === type) {
          stock[i].categories.map(c => {
            if (c.id !== type) ans.push(`${c.category_name}_${c.id}`);
          });
        }
      }
    }
    let ans2 = [];
    for (let i = 0; i < ans.length; i++) {
      ans2.map(a => {
        if (a[0] === ans[i]) a.push(ans[i]);
      });
      if (ans2.filter(a => a[0] === ans[i])[0] === undefined) ans2.push([ans[i]]);
    }
    return ans2;
  }

  const fetchThisCategory = (id, main) => {
    props.fetchProductsByCategory(id, main);
  };

  return (
    <div className="nav-outline">
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
                  <Link to="/categories/1">
                    <strong onClick={() => fetchThisCategory(1, 1)}>
                      CANDY
                    </strong>
                  </Link>
                </li>
                <hr />
                {props.products[0] &&
                  sortCandy(props.products, 1).map(tag => {
                    return (
                      <Link
                        key={tag[0]}
                        to={`/categories/${tag[0].split('_')[1]}`}
                      >
                        <li
                          onClick={() =>
                            fetchThisCategory(tag[0].split('_')[1], 1)
                          }
                        >
                          {tag[0].split('_')[0].toUpperCase()}
                          {tag.length > 1 ? ` (${tag.length})` : ''}
                        </li>
                      </Link>
                    );
                  })}
              </ul>
            </div>

            <div className="dropdown-list1">
              <ul>
                <li>
                  <Link to="/categories/2">
                    <strong onClick={() => fetchThisCategory(2, 2)}>
                      GUMMY
                    </strong>
                  </Link>
                </li>
                <hr />
                {props.products[0] &&
                  sortCandy(props.products, 2).map(tag => {
                    return (
                      <Link
                        key={tag[0]}
                        to={`/categories/${tag[0].split('_')[1]}`}
                      >
                        <li
                          onClick={() =>
                            fetchThisCategory(tag[0].split('_')[1], 2)
                          }
                        >
                          {tag[0].split('_')[0].toUpperCase()}
                          {tag.length > 1 ? ` (${tag.length})` : ''}
                        </li>
                      </Link>
                    );
                  })}
              </ul>
            </div>
            <div className="dropdown-list1">
              <ul>
                <li>
                  <Link to="/categories/3">
                    <strong onClick={() => fetchThisCategory(3, 3)}>
                      CHOCOLATE
                    </strong>
                  </Link>
                </li>
                <hr />
                {props.products[0] &&
                  sortCandy(props.products, 3).map(tag => {
                    return (
                      <Link
                        key={tag[0]}
                        to={`/categories/${tag[0].split('_')[1]}`}
                      >
                        <li
                          onClick={() =>
                            fetchThisCategory(tag[0].split('_')[1], 3)
                          }
                        >
                          {tag[0].split('_')[0].toUpperCase()}
                          {tag.length > 1 ? ` (${tag.length})` : ''}
                        </li>
                      </Link>
                    );
                  })}
              </ul>
            </div>
            <div className="dropdown-list1">
              <ul>
                <li>
                  <Link to="/categories/4">
                    <strong onClick={() => fetchThisCategory(4, 4)}>
                      COLLECTON
                    </strong>
                  </Link>
                </li>
                <hr />
                {props.products[0] &&
                  sortCandy(props.products, 4).map(tag => {
                    return (
                      <Link
                        key={tag[0]}
                        to={`/categories/${tag[0].split('_')[1]}`}
                      >
                        <li
                          onClick={() =>
                            fetchThisCategory(tag[0].split('_')[1], 4)
                          }
                        >
                          {tag[0].split('_')[0].toUpperCase()}
                          {tag.length > 1 ? ` (${tag.length})` : ''}
                        </li>
                      </Link>
                    );
                  })}
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
    cart: state.cart,
    products: state.products.products
  };
};
const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout());
    },
    fetchProductsByCategory: (id, main) => {
      dispatch(fetchProductsByCategory(id, main));
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

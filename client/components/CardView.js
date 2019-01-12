import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { addItem, postItems, updateQuantity } from '../store/cart';
import { connect } from 'react-redux';

const CardView = props => {
  const addUp = id => {
    const qty = document.getElementsByName(`q${id}`);
    let value = Number(qty[0].value);
    qty[0].value = value + 1;
  };
  const cutDown = id => {
    const qty = document.getElementsByName(`q${id}`);
    let value = Number(qty[0].value);
    if (value > 1) qty[0].value = value - 1;
    else qty[0].value = 1;
  };
  const submitResult = (id, price) => {
    const qty = document.getElementsByName(`q${id}`);
    let value = Number(qty[0].value);
    let cartId = 99;
    console.log('productId =', id, 'qty=', value, 'price=', price);
    if (props.cart.filter(stock => stock.stockId === id)[0]) {
      props.updateQuantity({
        stockId: id,
        quantity:
          props.cart.filter(stock => stock.stockId === id)[0].quantity + value,
        cartId: cartId,
        price: price
      });
    } else {
      props.addItem({
        stockId: id,
        quantity: value,
        cartId: cartId,
        price: price
      });
    }
  };

  const { product } = props;
  // let firstId = product.images[0].id

  return (
    <div className="single-card-outline">
      <div className="card">
        <Link to={`/products/${product.id}`}>
          <div className="card-img">
            <img src={product.images[0].imageUrl} />
          </div>
        </Link>
        <div className="productText">
          <p>{product.name}</p>
          <p>{product.description}</p>
          <p>${product.price}</p>
        </div>
      </div>
      <div className="card-extend">
        <div className="qty-bar">
          <span className="qty-text">QTY</span>
          <input
            type="text"
            className="qty"
            name={`q${product.id}`}
            defaultValue="1"
          />
          <span
            className="qty-sign"
            onClick={() => {
              cutDown(product.id);
            }}
          >
            -
          </span>
          <span
            className="qty-sign"
            onClick={() => {
              addUp(product.id);
            }}
          >
            +
          </span>
        </div>
        <button
          type="button"
          onClick={() => {
            submitResult(product.id, product.price);
          }}
        >
          <span>ADD TO BAG</span>
        </button>
      </div>
    </div>
  );
};
const mapStateToProps = state => ({ user: state.user, cart: state.cart });

const mapDispatchToProps = dispatch => {
  return {
    addItem: newItem => dispatch(addItem(newItem)),
    postItems: newItem => dispatch(postItems(newItem)),
    updateQuantity: newItem => dispatch(updateQuantity(newItem))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardView);

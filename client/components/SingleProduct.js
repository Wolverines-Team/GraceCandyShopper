import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Reviews from './Reviews';
import SideBar from './SideBar';
import { postItems, updateItemQuantity } from '../store';

const SingleProduct = props => {
  const [product] = props.products.filter(
    product => product.id === Number(props.match.params.id)
  );
  function sortImages(images) {
    let min = 1000;
    let ans = [];
    for (let i = 0; i < images.length; i++) {
      if (images[i].id < min) min = images[i].id;
    }
    for (let j = 0; j < images.length; j++) {
      ans.push(images.filter(im => im.id === min)[0]);
      min += 1;
    }
    return ans;
  }
  let imagesArray = sortImages(product.images);
  let firstId = imagesArray[0].id;

  const submitResult = stockId => {
    const cartId = props.info.id;

    if (props.cart.filter(stock => stock.stockId === stockId)[0]) {
      const quantity =
        props.cart.filter(stock => stock.stockId === stockId)[0].quantity + 1;
      props.updateItemQuantity({
        stockId,
        cartId,
        quantity
        // price
      });
    } else {
      props.postItems(cartId, {
        stockId,
        cartId
        // price
      });
    }
  };

  function currentDiv(n) {
    let slideIndex = n;
    let x = document.getElementsByClassName('mySlides');
    var dots = document.getElementsByClassName('demo');
    if (n > x.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = x.length;
    }
    for (let i = 0; i < x.length; i++) {
      x[i].className = 'mySlides hide';
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace('opacity-off', '');
    }
    x[slideIndex - 1].className = 'mySlides';
    dots[slideIndex - 1].className =
      'demo opacity opacity-off hover-opacity-off';
  }

  return (
    <div className="main-outline">
      <div className="single-outline">
        <div className="productName">
          <h1>{product.name.toUpperCase() + ' $' + product.price}</h1>

          <button
            onClick={() => {
              submitResult(product.id, product.price);
            }}
            type="button"
          >
            {' '}
            ADD TO BAG
          </button>
        </div>

        <div className="s-outline">
          {imagesArray[0] &&
            imagesArray.map(m => {
              return (
                <div key={m.id}>
                  <img
                    className={m.id === firstId ? 'mySlides' : 'mySlides hide'}
                    src={m.imageUrl}
                  />
                </div>
              );
            })}

          <div className="s-row">
            {imagesArray[0] &&
              imagesArray.map((m, i) => {
                return (
                  <div key={m.id}>
                    <img
                      className={
                        i === 0
                          ? 'demo opacity opacity-off hover-opacity-off'
                          : 'demo opacity hover-opacity-off'
                      }
                      src={m.imageUrl}
                      onClick={() => {
                        currentDiv(i + 1);
                      }}
                    />
                  </div>
                );
              })}
          </div>
        </div>

        <div className="review">
          <hr />
          <h4>SHIPPING INFO</h4>
          <p>
            This item typically ships within 1-2 business days. This processing
            time is in addition to time in transit via your chosen shipping
            method.
          </p>
          <hr />
          <h4>REVIEWS</h4>
          <p>{product.description}</p>
          <Reviews product={product} />
          <hr />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user,
    products: state.products.products,
    cart: state.cart,
    info: state.info
  };
};

const mapDispatchToProps = dispatch => {
  return {
    postItems: (id, newItem) => dispatch(postItems(id, newItem)),

    updateItemQuantity: newItem => dispatch(updateItemQuantity(newItem))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);

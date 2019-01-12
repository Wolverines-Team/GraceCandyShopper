import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Reviews from './Reviews';
import SideBar from './SideBar';
import { postItems, fetchItems } from '../store';

const SingleProduct = props => {
  const [product] = props.products.filter(
    product => product.id === Number(props.match.params.id)
  );
  let firstId = product.images[0].id;

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
              //arguments are samples.need to figure out how to get the cartId into the below method later.
              // console.log('What are products???====>', product);
              // //product is a single stock..
              // //if: that item is in the cart already, invoke the updateItem.
              // console.log('=====props from singleProducts===>> ', props);
              // if (!product || product.id !==)

              //else: if item does not exist in the cart, invoke the addItems.
              props.addItem(5, product);
            }}
            type="button"
          >
            {' '}
            ADD TO BAG
          </button>
        </div>

        <div className="s-outline">
          {product.images[0] &&
            product.images.map(m => {
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
            {product.images[0] &&
              product.images.map((m, i) => {
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
  console.log('=====what does STATE look like?===> ', state);
  return {
    userId: state.user.id,
    products: state.products.products
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addItem: (cartId, item) => dispatch(postItems(cartId, item)),
    fetchItems: cartId => dispatch(fetchItems(cartId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);

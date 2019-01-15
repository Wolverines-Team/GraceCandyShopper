import React, { Component } from 'react';
import { connect } from 'react-redux';
import Reviews from '../Reviews';
import Images from '../images';
import {
  updateProducts,
  fetchProducts,
  deleteProduct,
  fetchProductsByCategory,
  updatePicture
} from '../../store';

class SingleProductAdmin extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      id: 0,
      price: '0.00',
      description: '',
      quantity: 0,
      category: '',
      brand: '',
      images: [],
      ratings: []
    };
  }

  componentDidMount() {
    const [
      { description, id, name, price, quantity, ratings, images }
    ] = this.props.products.filter(
      product => product.id == this.props.match.params.id
    );
    this.setState({
      id,
      name,
      price,
      description,
      quantity,
      ratings,
      images
    });
  }
  render() {
    const {
      name,
      description,
      price,
      quantity,
      ratings,
      id,
      images
    } = this.state;

    function editImage(imagesArray, index, url) {
      let ans = imagesArray;
      ans[index].imageUrl = url;
      return ans;
    }

    return (
      <div className="singleView">
        <form
          onSubmit={async evt => {
            evt.preventDefault();
            this.props.updateProducts({
              id,
              name,
              price,
              description,
              quantity,
              ratings,
              images
            });
            this.props.fetchProducts();
            // this.props.history.push('/products');
          }}
        >
          <div className="outline">
            <div>
              <h4>Name:</h4>
              <p>{name}</p>
              <input
                className="input"
                type="text"
                onChange={evt => {
                  this.setState({
                    name: evt.target.value
                  });
                }}
                value={name}
              />
            </div>
            <div>
              <h4>Price:</h4>
              <p>${price}</p>
              <input
                className="input"
                type="number"
                onChange={evt => {
                  this.setState({ price: evt.target.value });
                }}
                value={price}
              />
            </div>
            <div>
              <h4>Stock:</h4>
              <p>{quantity}</p>
              <input
                className="input"
                type="number"
                onChange={evt => {
                  this.setState({
                    quantity: evt.target.value
                  });
                }}
                value={quantity}
              />
            </div>
          </div>
          <div className="description">
            <h4>Description:</h4>
            <p>{description}</p>
            <textarea
              className="input"
              type="text"
              onChange={evt => {
                this.setState({
                  description: evt.target.value
                });
              }}
              value={description}
            />
          </div>
          <button type="submit">SAVE CHANGED PRODUCT</button>
          <button
            onClick={evt => {
              evt.preventDefault();
              this.props.deleteProduct(id);
              this.props.fetchProducts();
              this.props.history.push('/products');
            }}
          >
            DELETE
          </button>
        </form>
        <Reviews product={ratings} />
        {images[0] &&
          images.map((im, i) => {
            return (
              <div className="edit-outline">
                <div className="outline">
                  <h4>image{i + 1} </h4>
                  <input
                    className="input"
                    type="text"
                    onChange={evt => {
                      this.setState({
                        images: editImage(images, i, evt.target.value)
                      });
                    }}
                    value={images[i].imageUrl}
                  />
                </div>
                <div>
                  <img src={im.imageUrl} className="editImage" />
                  <button
                    onClick={async evt => {
                      evt.preventDefault();
                      this.props.updatePicture(images[i]);
                      this.props.fetchProducts();
                    }}
                  >
                    EDIT IMAGE
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}

const mapStateToProps = state => ({ products: state.products.products });

const mapDispatchToProps = dispatch => {
  return {
    updateProducts: product => {
      dispatch(updateProducts(product));
    },
    fetchProducts: () => {
      dispatch(fetchProducts());
    },
    fetchProductsByCategory: id => {
      dispatch(fetchProductsByCategory(id));
    },
    deleteProduct: id => {
      dispatch(deleteProduct(id));
    },
    updatePicture: id => {
      dispatch(updatePicture(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleProductAdmin);

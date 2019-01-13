import React, { Component } from 'react';
import { connect } from 'react-redux';
import Reviews from '../Reviews';
import {
  updateProducts,
  fetchProducts,
  deleteProduct,
  fetchProductsByCategory
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
<<<<<<< HEAD

      ratings

=======
      ratings,
      images
>>>>>>> 90e1e96b6a280c661b4cf78078423f29e0c2589d
    });
  }

  render() {
<<<<<<< HEAD

    const { name, description, price, quantity, ratings, id } = this.state;
=======
    const {
      id,
      name,
      price,
      description,
      quantity,
      ratings,
      images
    } = this.state;

>>>>>>> 90e1e96b6a280c661b4cf78078423f29e0c2589d
    return (
      <div className="singleview">
        <form
          onSubmit={async evt => {
            evt.preventDefault();
<<<<<<< HEAD
            this.props.updateProducts({

=======
            await this.props.updateProducts({
>>>>>>> 90e1e96b6a280c661b4cf78078423f29e0c2589d
              id,
              name,
              price,
              description,
              quantity,
              ratings
            });
            this.props.fetchProducts();
            this.props.history.push('/products');
          }}
        >
          <h1>Name:{name}</h1>
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
<<<<<<< HEAD

          {/* <img src={product.imageUrl[1]} /> */}
          {/* <Images images={product.images} */}

=======
          {images.length ? (
            <img src={images[1].imageUrl} height="200" width="200" />
          ) : (
            <div />
          )}
>>>>>>> 90e1e96b6a280c661b4cf78078423f29e0c2589d
          <div className="producttext">
            <h4>
              description:{description}
              <input
                className="input"
                type="text"
                onChange={evt => {
                  this.setState({
                    description: evt.target.value
                  });
                }}
                value={description}
              />
            </h4>
          </div>

          <h3>Price: ${price}</h3>
          <input
            className="input"
<<<<<<< HEAD

=======
            type="number"
>>>>>>> 90e1e96b6a280c661b4cf78078423f29e0c2589d
            onChange={evt => {
              this.setState({ price: evt.target.value });
            }}
            value={price}
          />
          {/* THUNK>>>> <button onclick={addToCart(product.id)}>Add To Cart</button> */}
          <h4>Stock:{quantity}</h4>
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
<<<<<<< HEAD


=======
>>>>>>> 90e1e96b6a280c661b4cf78078423f29e0c2589d
          <button type="submit">Save</button>
          <button
            onClick={evt => {
              evt.preventDefault();
              this.props.deleteProduct(id);
              this.props.fetchProducts();
              this.props.history.push('/products');
            }}
          >
            DELETE PRODUCT
          </button>
        </form>
        <div className="reviews">
<<<<<<< HEAD
          <Reviews ratings={ratings} />

=======
          <Reviews product={{ ratings }} />
>>>>>>> 90e1e96b6a280c661b4cf78078423f29e0c2589d
        </div>
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
<<<<<<< HEAD


      dispatch(fetchProductsByCategory(id));

=======
      dispatch(fetchProductsByCategory(id));
    },
    deleteProduct: id => {
      dispatch(deleteProduct(id));
>>>>>>> 90e1e96b6a280c661b4cf78078423f29e0c2589d
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleProductAdmin);

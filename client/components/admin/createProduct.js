import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProduct, fetchProducts } from '../../store';

class CreateProduct extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      id: 0,
      price: '000',
      description: '',
      quantity: 0,
      category: 0,
      brand: '',
      images: 1,
      ratings: []
    };
  }

  render() {
    const { name, description, price, quantity, category, images } = this.state;

    return (
      <div className="outline">
        <div className="singleView">
          <h2>ADD NEW PRODUCT</h2>
          <form
            onSubmit={async evt => {
              evt.preventDefault();
              await this.props.createProduct({
                name,
                price,
                description,
                quantity
              });
              await this.props.fetchProducts();
              let max = 0;
              this.props.products.map(a => {
                if (a.id > max) max = a.id;
              });
              console.log('max id', max);
              this.props.history.push('/products');
            }}
          >
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
            <div className="producttext">
              <h4>description:</h4>
              <p>{description}</p>
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
            </div>

            <h4>Price(in cents): ${price / 100}</h4>
            <input
              className="input"
              onChange={evt => {
                this.setState({ price: evt.target.value });
              }}
              value={price}
            />
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
            <h4>categoryId:</h4>
            <input
              className="input"
              type="text"
              onChange={evt => {
                this.setState({
                  category: evt.target.value
                });
              }}
              value={category}
            />
            <div className="next-step">
              {/* <span>Next Step >>></span> */}
              <button type="submit">Add Product</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.products
});

const mapDispatchToProps = dispatch => {
  return {
    createProduct: product => {
      dispatch(createProduct(product));
    },
    fetchProducts: () => {
      dispatch(fetchProducts());
    },
    fetchProductsByCategory: id => {
      dispatch(fetchProductsByCategory(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProduct);

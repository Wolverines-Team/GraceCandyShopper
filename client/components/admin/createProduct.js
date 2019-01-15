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
      images: [],
      ratings: []
    };
  }

  render() {
    const { name, description, price, quantity, category, images } = this.state;

    function editImage(imagesArray, index, url) {
      let ans = imagesArray;
      ans[index].imageUrl = url;
      return ans;
    }

    return (
      <div className="outline">
        <div className="singleView">
          <form
            onSubmit={evt => {
              evt.preventDefault();
              this.props.createProduct({
                name,
                price,
                description,
                quantity,
                images
              });

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

            {/* <div className="edit-outline">
              <div className="outline">
                <h4>image1</h4>
                <input className="input" type="text"
                onChange={evt => {
                this.setState({
                images: editImage(images, 0, evt.target.value )
                });
                }}
                value={images[0] && images[0].imageUrl}
                />
              </div>
              <div>
                <img src={images[0] && images[0].imageUrl} className="editImage"/>
              <button>EDIT IMAGE</button>
              </div>
            </div> */}

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
            <button type="submit">Create</button>
          </form>
        </div>
      </div>
    );
  }
}

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

export default connect(null, mapDispatchToProps)(CreateProduct);

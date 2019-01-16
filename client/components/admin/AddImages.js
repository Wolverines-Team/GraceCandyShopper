import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProduct, fetchProducts } from '../../store';

class CreateProduct extends Component {
  constructor() {
    super();
    this.state = {
      stockId: this.props.match.params.stockId,
      images: []
    };
  }

  render() {
    const { stockId, images } = this.state;

    function editImage(imagesArray, index, url) {
      let ans = imagesArray;
      ans[index].imageUrl = url;
      return ans;
    }

    return (
      <div className="outline">
        <div className="singleView">
          <h2>ADD NEW IMAGES</h2>
          <form
            onSubmit={evt => {
              evt.preventDefault();
              this.props.createProduct({
                stockId,
                images
              });
              this.props.history.push('/addimages');
            }}
          >
            <div>
              <h4>Stock Id: {stockId}</h4>
              <input
                className="input"
                type="text"
                onChange={evt => {
                  this.setState({
                    stockId: evt.target.value
                  });
                }}
                value={stockId}
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

            <div className="next-step">
              <button type="submit">Add Images</button>
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
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProduct);

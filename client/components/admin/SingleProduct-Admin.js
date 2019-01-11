import React, { Component } from 'react'
import { connect } from 'react-redux'
import Reviews from '../Reviews'
import { updateProducts, fetchProducts, deleteProduct } from '../../store'

class SingleProductAdmin extends Component {
  constructor () {
    super()
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
    }
  }

  componentDidMount () {
    const [
      { description, id, name, price, quantity, ratings, images }
    ] = this.props.products.filter(
      product => product.id == this.props.match.params.id
    )
    this.setState({
      id,
      name,
      price,
      description,
      quantity,
      ratings,
      images
    })
  }

  render () {
    const {
      id,
      name,
      price,
      description,
      quantity,
      ratings,
      images
    } = this.state

    return (
      <div className='singleview'>
        <form
          onSubmit={async evt => {
            evt.preventDefault()
            await this.props.updateProducts({
              id,
              name,
              price,
              description,
              quantity,
              ratings
            })
            this.props.fetchProducts()
            this.props.history.push('/products')
          }}
        >
          <h1>Name:{name}</h1>
          <input
            className='input'
            type='text'
            onChange={evt => {
              this.setState({
                name: evt.target.value
              })
            }}
            value={name}
          />
          {images.length ? (
            <img src={images[1].imageUrl} height='200' width='200' />
          ) : (
            <div />
          )}
          <div className='producttext'>
            <h4>
              description:{description}
              <input
                className='input'
                type='text'
                onChange={evt => {
                  this.setState({
                    description: evt.target.value
                  })
                }}
                value={description}
              />
            </h4>
          </div>

          <h3>Price: ${price}</h3>
          <input
            className='input'
            type='number'
            onChange={evt => {
              this.setState({ price: evt.target.value })
            }}
            value={price}
          />
          {/* THUNK>>>> <button onclick={addToCart(product.id)}>Add To Cart</button> */}
          <h4>Stock:{quantity}</h4>
          <input
            className='input'
            type='number'
            onChange={evt => {
              this.setState({
                quantity: evt.target.value
              })
            }}
            value={quantity}
          />
          <button type='submit'>Save</button>
          <button
            onClick={evt => {
              evt.preventDefault()
              this.props.deleteProduct(id)
              this.props.fetchProducts()
              this.props.history.push('/products')
            }}
          >
            DELETE PRODUCT
          </button>
        </form>
        <div className='reviews'>
          <Reviews product={{ ratings }} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({ products: state.products.products })

const mapDispatchToProps = dispatch => {
  return {
    updateProducts: product => {
      dispatch(updateProducts(product))
    },
    fetchProducts: () => {
      dispatch(fetchProducts())
    },
    fetchProductsByCategory: id => {
      dispatch(fetchProductsByCategory(id))
    },
    deleteProduct: id => {
      dispatch(deleteProduct(id))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleProductAdmin)

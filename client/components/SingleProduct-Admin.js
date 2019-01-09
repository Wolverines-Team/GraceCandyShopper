import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Reviews } from './Reviews'
import { updateProducts, fetchProducts } from '../store'
import CurrencyInput from 'react-currency-input'

class SingleProductAdmin extends Component {
  constructor () {
    super()
    this.state = {
      name: '',
      price: '0.00',
      description: '',
      quantity: 0,
      category: '',
      brand: '',
      photosIds: [],
      ratings: []
    }
  }

  componentDidMount () {
    const [
      { name, price, description, quantity, ratings }
    ] = this.props.products.filter(
      product => product.id == this.props.match.params.id
    )
    this.setState({
      name,
      price,
      description,
      quantity
    })
  }

  render () {
    const { name, description, price, quantity, ratings } = this.state
    return (
      <div className='singleview'>
        <form
          onSubmit={evt => {
            evt.preventDefault()
            this.props.updateProducts(this.state)
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
          {/* <img src={product.imageUrl[1]} /> */}
          {/* <Images images={product.images} */}
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
          <Reviews ratings={ratings} />
          <h3>Price: ${price}</h3>
          <input
            className='input'
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
        </form>
        <div className='reviews'>
          <Reviews product={this.props.products} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({ products: state.products })

const mapDispatchToProps = dispatch => {
  return {
    updateProducts: product => {
      dispatch(updateProducts(product))
    },
    fetchProducts: () => {
      dispatch(fetchProducts())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleProductAdmin)

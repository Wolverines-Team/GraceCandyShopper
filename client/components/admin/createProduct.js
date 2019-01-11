import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProduct, fetchProducts } from '../../store'

class CreateProduct extends Component {
  constructor () {
    super()
    this.state = {
      name: '',
      id: 0,
      price: '000',
      description: '',
      quantity: 0,
      category: 0,
      brand: '',
      ratings: []
    }
  }

  render () {
    const { name, description, price, quantity, category, brand } = this.state
    return (
      <div className='singleview'>
        <form
          onSubmit={evt => {
            evt.preventDefault()
            this.props.createProduct({
              name,
              price,
              description,
              quantity
            })

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

          <h3>Price(in cents): ${price}</h3>
          <input
            className='input'
            onChange={evt => {
              this.setState({ price: evt.target.value })
            }}
            value={price}
          />
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
          <h4>Brand:</h4>
          <input
            className='input'
            type='text'
            onChange={evt => {
              this.setState({
                brand: evt.target.value
              })
            }}
            value={brand}
          />
          <h4>categoryId:</h4>
          <input
            className='input'
            type='text'
            onChange={evt => {
              this.setState({
                category: evt.target.value
              })
            }}
            value={category}
          />
          <button type='submit'>Create</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createProduct: product => {
      dispatch(createProduct(product))
    },
    fetchProducts: () => {
      dispatch(fetchProducts())
    },
    fetchProductsByCategory: id => {
      dispatch(fetchProductsByCategory(id))
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(CreateProduct)

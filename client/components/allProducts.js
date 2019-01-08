import React, { Component } from 'react'
import { connect } from 'react-redux'
import CardView from './CardView'

export class AllProducts extends Component {
  constructor () {
    super()
    this.state = { products: [] }
  }

  render () {
    let products = this.state.products
    return (
      <div>
        {products.length
          ? products.map(product => {
            return (
              <div key={product.id}>
                <CardView product={product} history={this.props.history} />
              </div>
            )
          })
          : 'No products'}
      </div>
    )
  }
}

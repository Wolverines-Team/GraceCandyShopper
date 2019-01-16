import React, { Component } from 'react'
import { connect } from 'react-redux'
import CardView from './CardView'
import { fetchProductsByCategory } from '../store'
import SideBar from './SideBar'

class CategoryView extends Component {
  constructor () {
    super()
    this.state = { products: [] }
  }
  componentDidMount () {
    this.props.fetchProductsByCategory(this.props.match.params.id)
  }

  render () {
    const products = this.props.products.stocks
    return (
      <div className='outline'>
        <div className='all-outline'>
          <SideBar />
          <div className='card-outline'>
            {products.length ? (
              products.map(product => {
                return (
                  <div key={product.id}>
                    <CardView product={product} history={this.props.history} />
                  </div>
                )
              })
            ) : (
              <h1>No products!</h1>
            )}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({ products: state.products.catted })

const mapDispatchToProps = dispatch => {
  return {
    fetchProductsByCategory: id => {
      dispatch(fetchProductsByCategory(id))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryView)

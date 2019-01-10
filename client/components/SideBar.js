import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class SideBar extends Component {
  constructor () {
    super()
    this.state = {
      categories: []
    }
  }
  componentDidMount () {
    this.setState({ categories: this.props.categories })
  }
  render () {
    return (
      <div className='side-outline'>
        {this.state.categories.map(category => {
          return (
            <div key={category.id}>
              <Link to={`/products/categories/${category.id}`}>
                <h3>{category.category_name}</h3>
              </Link>
            </div>
          )
        })}
      </div>
    )
  }
}

const mapState = state => {
  return {
    categories: state.products.categories
  }
}
export default connect(mapState)(SideBar)

import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import Stars from './stars'
import { deleteReview, createReview, fetchProducts } from '../store'

class Reviews extends Component {
  constructor () {
    super()
    this.state = {
      review_text: '',
      rating_num: 0,
      userId: 0
    }
  }

  componentDidMount () {
    this.setState({ ratings: this.props.product.ratings })
  }
  render () {
    const ratings = this.props.product.ratings

    return (
      <div>
        {ratings ? (
          ratings.map(rating => {
            const { review_text, rating_num, id } = rating
            return (
              <div key={id}>
                <Stars stars={rating_num} />
                <p>{review_text}</p>
                {this.props.user.isAdmin ? (
                  <form
                    onSubmit={evt => {
                      evt.preventDefault()
                      this.props.deleteReview(rating.id)
                      this.props.fetchProducts()
                      this.props.history.push('/products')
                    }}
                  >
                    <button type='submit'>Delete</button>
                  </form>
                ) : (
                  <div />
                )}
              </div>
            )
          })
        ) : (
          <h1>No Reviews Yet</h1>
        )}
        {!this.props.user.isAdmin && this.props.user.id ? (
          <form
            onSubmit={evt => {
              evt.preventDefault()

              this.props.createReview({
                rating_num: this.state.rating_num,
                review_text: this.state.review_text,
                stockId: Number(this.props.match.params.id),
                userId: this.props.user.id
              })
            }}
          >
            <h3>Stars:</h3>
            <input
              className='input'
              type='number'
              min='1'
              max='5'
              onChange={evt => {
                this.setState({
                  rating_num: evt.target.value
                })
              }}
              value={this.state.rating_num}
            />
            <h3>What did you think?:</h3>
            <input
              className='input'
              type='text'
              onChange={evt => {
                this.setState({
                  review_text: evt.target.value
                })
              }}
              value={this.state.review_text}
            />
            <button type='submit'>Post Review</button>
          </form>
        ) : (
          <h1>{''}</h1>
        )}
      </div>
    )
  }
}
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    user: state.user
  }
}

const mapDispatch = dispatch => {
  return {
    deleteReview: id => {
      dispatch(deleteReview(id))
    },
    createReview: review => {
      dispatch(createReview(review))
    },
    fetchProducts: review => {
      dispatch(fetchProducts(review))
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(
  connect(
    mapState,
    mapDispatch
  )(Reviews)
)

// ★☆

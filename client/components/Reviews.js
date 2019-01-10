import React from 'react'

import Stars from './stars'

class Reviews extends Component {
  constructor () {
    super()
  }

  render () {
    const ratings = this.props.ratings

    return (
      <div>
        {ratings ? (
          ratings.map(rating => {
            const { review_text, rating_num, id } = rating
            return (
              <div key={id}>
                <Stars stars={rating_num} />
                <p>{review_text}</p>
              </div>
            )
          })
        ) : (
          <h1>No Reviews Yet</h1>
        )}
        {!props.user.role ? (
          <div>
            <h3>Write Review:</h3>
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
          </div>
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
    loadInitialData () {
      dispatch(me())
    },
    fetchProducts: () => {
      dispatch(fetchProducts())
    },
    fetchProductsByCategory: id => {
      dispatch(fetchProductsByCategory(id))
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

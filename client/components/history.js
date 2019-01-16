import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchHistory } from '../store'

class History extends Component {
  constructor () {
    super()
  }

  render () {
    let history
    if (this.props.history) {
      history = this.props.history
    }
    return (
      <div className='spacer'>
        <div className='spacer'>
          {history.map(item => (
            <div key='item.id'>
              <h3>{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  history: state.info.history,
  user: state.user.id
})

const mapDispatchToProps = dispatch => {
  return {
    fetchHistory: id => {
      dispatch(fetchHistory(id))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(History)

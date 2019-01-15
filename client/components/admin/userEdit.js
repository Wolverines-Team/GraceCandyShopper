import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers, makeAdmin } from '../../store/info'

class UserEdit extends Component {
  constructor () {
    super()
  }
  onChange = evt => {
    this.props.makeAdmin(evt.target.value)
  }
  componentDidMount () {
    this.props.fetchUsers()
  }

  render () {
    let users
    if (this.props.users) {
      users = this.props.users
    }

    return (
      <div className='spacer'>
        {users.map(user => (
          <div key={user.id}>
            <h4>{user.name}</h4>
            <p>{user.email}</p>
            {user.isAdmin ? (
              <p>Is Admin</p>
            ) : (
              <input type='checkbox' value={user.id} onChange={this.onChange} />
            )}
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => ({ users: state.info.users })

const mapDispatchToProps = dispatch => {
  return {
    makeAdmin: id => {
      dispatch(makeAdmin(id))
    },
    fetchUsers: () => {
      dispatch(fetchUsers())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserEdit)

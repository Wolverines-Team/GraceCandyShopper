import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const WelcomeBar = props => {
  return (
    <div>
      {props.user.username ? (
        <h1>Welcome back {props.user.username}! </h1>
      ) : (
        <h1>Welcome! </h1>
      )}
    </div>
  )
}

const mapState = state => {
  return {
    user: state.user
  }
}
export default connect(mapState)(WelcomeBar)

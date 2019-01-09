import React, { Component } from 'react'
import { connect } from 'react-redux'

const Stars = props => {
  const stars = props.stars
  switch (stars) {
    case stars === 1:
      return <h2>★☆☆☆☆</h2>
    case stars === 2:
      return <h2>★★☆☆☆</h2>
    case stars === 3:
      return <h2>★★★☆☆</h2>
    case stars === 4:
      return <h2>★★★★☆</h2>
    case stars === 5:
      return <h2>★★★★★</h2>
    default:
      return 'dooky'
  }
}
export default Stars

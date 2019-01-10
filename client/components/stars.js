import React from 'react'

const Stars = props => {
  const stars = props.stars
  if (stars === 1) {
    return <h2>★☆☆☆☆</h2>
  } else {
    if (stars === 2) {
      return <h2>★★☆☆☆</h2>
    } else {
      if (stars === 3) {
        return <h2>★★★☆☆</h2>
      } else {
        if (stars === 4) {
          return <h2>★★★★☆</h2>
        } else {
          if (stars === 5) {
            return <h2>★★★★★</h2>
          }
        }
      }
    }
  }
}

export default Stars

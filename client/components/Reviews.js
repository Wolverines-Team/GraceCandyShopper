import React, { Component } from 'react'
import { connect } from 'react-redux'

export const Reviews = props => {
  const reviews = [
    { name: 'dirk', review_text: 'yo this candy slaps', rating_num: 1, id: 0 }
  ]

  return (
    <div>
      {reviews.map(review => {
        const { name, review_text, rating_num, id } = review
        return (
          <div key={id}>
            {/* <Stars rating={rating_num} /> */}
            <p>{review_text}</p>
          </div>
        )
      })}
    </div>
  )
}

// ★☆

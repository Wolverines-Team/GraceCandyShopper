import React, { Component } from 'react'
import { connect } from 'react-redux'
import Stars from './stars'

export const Reviews = props => {
  console.log(props.ratings)
  const ratings = props.ratings

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
    </div>
  )
}

// ★☆

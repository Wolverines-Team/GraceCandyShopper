import React, { Component } from 'react'
import { connect } from 'react-redux'

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
              {/* <Stars rating={rating_num} /> */}
              <p>{review_text}</p>
              <p>{rating_num}</p>
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

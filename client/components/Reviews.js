import React, { Component } from 'react'
import { connect } from 'react-redux'

SingleProduct = props => {
  const { reviews } = props.product

  return (
    <div>
      {reviews.map(review => {
        const { name, review_text, rating_num, id } = review
        return (
          <div id={id}>
            <Stars rating={rating_num} />
            <p>{review_text}</p>
          </div>
        )
      })}
    </div>
  )
}

// ★☆

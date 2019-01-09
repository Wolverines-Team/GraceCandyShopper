import React from 'react'

import Stars from './stars'

const Reviews = props => {
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
export default Reviews

// ★☆

import React, { Component } from 'react'

const Images = props => {
  const images = props.images

  return (
    <div>
      {images.map(image => {
        return (
          <div key={image.id}>
            <img src={image.imageUrl} />
          </div>
        )
      })}
    </div>
  )
}

export default Images

import React, { Component } from 'react';

<<<<<<< HEAD
// type Props = {};

=======
>>>>>>> master
export default class StarRating extends Component {
  constructor() {
    super();
    this.setState = {
      ratings: 0,
      views: 0
    };
  }
  render() {
    return (
      <div className="star_container">
        <img className="star_image" src="../public/star_filled.png" />
        <img className="star_image" src="../public/star_filled.png" />
        <img className="star_image" src="../public/star_filled.png" />
        <img className="star_image" src="../public/star_filled.png" />
        <img className="star_image" src="../public/star_filled.png" />
        <p className="star_text"> {this.state} </p>
      </div>
    );
  }
}

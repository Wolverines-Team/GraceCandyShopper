const Seqeulize = require('sequelize')
const db = require('../db')

const Rating = db.define('rating', {
  rating_num: {
    type: Seqeulize.INTEGER,
    validate: {
      max: 5,
      min: 1
    }
  },
  review_text: {
    type: Seqeulize.TEXT
  }
})

/*
  - Rating model needs:
    - Create associations (in the index.js):
      - [ ] foreign_key: userId   (Rating.belongsTo(User))
      - [ ] foreign_key: candyId  (Rating.belongsTo(Stock))
*/

module.exports = Rating

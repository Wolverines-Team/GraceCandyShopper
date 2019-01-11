const Seqeulize = require('sequelize');
const db = require('../db');

const HistoryItems = db.define('historyItems', {
  cart_id: {
    type: Seqeulize.INTEGER
  },
  stock_id: {
    type: Seqeulize.INTEGER
  },
  quantity: {
    type: Seqeulize.INTEGER
  },
  historical_price: {
    type: Seqeulize.INTEGER
  }
});

module.exports = HistoryItems;

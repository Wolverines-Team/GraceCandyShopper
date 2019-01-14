import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Dashboard = props => {
  const user = props.user;
  return (
    <div className="dashboard">
      <h1>Welcome your dashboard {user.username}!</h1>
      <h3> Info Bar </h3>
      <ul list-style="stat info">
        <li>Total Visits: {user.visits} </li>
        <li>Email: {user.email}</li>
        <li>Member Since: {user.createdAt}</li>
      </ul>
      <Link to="/newproduct">
        <button type="button">CREATE NEW PRODUCT</button>
      </Link>
      <Link to="/products">
        <button type="button">EDIT EXISTING PRODUCT</button>
      </Link>
      <Link to="/checkoutitem">
        <button type="button">PURCHASED ITEM</button>
      </Link>
    </div>
  );
};

const mapState = state => {
  return {
    user: state.user
  };
};
export default connect(mapState)(Dashboard);

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CheckoutItems from './CheckoutItems';

const Dashboard = props => {
  const user = props.user;
  const adminCart = props.adminCart;
  return (
    <div className="outline">
      <div className="dashboard">
        <h1>Welcome your dashboard {user.username}!</h1>
        <ul list-style="stat info">
          <li>Total Visits: {user.visits} </li>
          <li>Email: {user.email}</li>
          <li>Member Since: {user.createdAt}</li>
        </ul>
        <CheckoutItems adminCart={adminCart} />
      </div>
    </div>
  );
};

const mapState = state => {
  return {
    user: state.user,
    adminCart: state.adminCart
  };
};
export default connect(mapState)(Dashboard);

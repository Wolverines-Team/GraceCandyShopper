import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const WelcomeBar = props => {
  const user = props.user;
  console.log('User is the welcome bar is >>>>', user);
  if (user.username && user.isAdmin === true) {
    return (
      <div>
        <h1>Welcome Back Admin {props.user.username}</h1>
        <Link to="/dashboard">
          {' '}
          <button type="button"> HERE IS YOUR DASHBOARD </button>
        </Link>
      </div>
    );
  } else if (user.username && user.isAdmin === false) {
    return (
      <div>
        <h1>Welcome Back {props.user.username}</h1>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Welcome New User! So nice to meet you!</h1>
      </div>
    );
  }
};

const mapState = state => {
  return {
    user: state.user
  };
};
export default connect(mapState)(WelcomeBar);

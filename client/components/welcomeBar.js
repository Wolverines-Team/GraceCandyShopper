import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const WelcomeBar = props => {
  return (
    <div className="outline">
      <div className="welcome">
        {props.user.username ? (
          <h2>
            Welcome back {props.user.isAdmin ? 'admin' : 'user'}{' '}
            {props.user.username}!{' '}
          </h2>
        ) : (
          <h2>Welcome! </h2>
        )}
      </div>
    </div>
  );
};

const mapState = state => {
  return {
    user: state.user
  };
};
export default connect(mapState)(WelcomeBar);

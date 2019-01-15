import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUsers, makeAdmin, takeAdmin } from "../../store/info";

class UserEdit extends Component {
  constructor() {
    super();
  }
  onChange = evt => {
    console.log(evt.target.value);
    if (evt.target.value) {
      this.props.takeAdmin(evt.target.id);
    } else {
      this.props.makeAdmin(evt.target.id);
    }
    this.props.fetchUsers();
  };
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    let users;
    if (this.props.users) {
      users = this.props.users;
    }

    return (
      <div className="spacer">
        {users.map(user => (
          <div key={user.id}>
            <h4>{user.name}</h4>
            <p>{user.email}</p>
            {user.isAdmin ? (
              <div>
                <p>Make Admin</p>
                <input
                  type="checkbox"
                  checked
                  value={user.isAdmin}
                  id={user.id}
                  onChange={this.onChange}
                />
              </div>
            ) : (
              <div>
                <p>Make Admin</p>
                <input
                  type="checkbox"
                  value={user.isAdmin}
                  id={user.id}
                  onChange={this.onChange}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({ users: state.info.users });

const mapDispatchToProps = dispatch => {
  return {
    makeAdmin: id => {
      dispatch(makeAdmin(id));
    },
    takeAdmin: id => {
      dispatch(takeAdmin(id));
    },
    fetchUsers: () => {
      dispatch(fetchUsers());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserEdit);

import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import { handleLogOut } from "../actions/authedUser";
export class Nav extends Component {
  handleLogOut = () => {
    const { dispatch } = this.props;
    dispatch(handleLogOut());
  };
  render() {
    console.log("navigation", this.props);
    const { authedUser, userName } = this.props;
    return (
      <div className="ui container">
        <div className="ui secondary pointing menu">
          <NavLink
            to="/"
            exact
            activeClassName="active"
            activeStyle={{
              color: "#0d6efd",
            }}
            className="item"
          >
            Home
          </NavLink>
          <NavLink
            to="/add"
            activeClassName="active"
            activeStyle={{
              color: "#0d6efd",
            }}
            className="item"
          >
            New Question
          </NavLink>
          <NavLink
            to="/leaderboard"
            activeClassName="active"
            activeStyle={{
              color: "#0d6efd",
            }}
            className="item"
          >
            LeaderBoard
          </NavLink>
          {authedUser === null ? null : (
            <div className="right menu">
              <p className="NavLoggedUser">Welcome: {userName}</p>
              <Link to="/">
                <button
                  className="ui red button"
                  id="logoutBtn"
                  onClick={this.handleLogOut}
                >
                  Log out
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const { authedUser, users } = state;
  const user = authedUser ? users[authedUser] : {};
  const { name } = user;
  return { authedUser: authedUser, userName: name };
};
export default connect(mapStateToProps)(Nav);

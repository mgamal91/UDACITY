import React, { Component } from "react";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
import logo from "../utils/media/p404_3.png";
export class LogIn extends Component {
  state = { user: "" };
  componentDidMount() {
    document.getElementById("myBtn").disabled = true;
  }
  onSelectChange = (event) => {
    const { value } = event.target;
    this.setState({ user: value });
    console.log(value);
    document.getElementById("myBtn").disabled = false;
  };
  onLoginSubmit = (event) => {
    event.preventDefault();
    const { user } = this.state;
    const { dispatch } = this.props;
    dispatch(setAuthedUser(user));
    console.log("authedUser", user);
  };
  render() {
    const { authUsers } = this.props;
    console.log("usersId", this.props);
    return (
      <div className="ui container">
        <div className="ui raised very padded text container segment">
          <div id="loginConatiner">
            <h1 className="center aligned text">Would You Rather!</h1>
            <img src={logo} alt="loginLogo" className="loginLogo" />
            <br />
            <div className="field">
              <label>Log In:</label>
              <select
                className="ui fluid dropdown"
                defaultValue={"DEFAULT"}
                onChange={this.onSelectChange}
              >
                <option value="DEFAULT" disabled>
                  Select Your User:
                </option>
                {Object.keys(authUsers).map((userId) => (
                  <option value={userId} key={userId}>
                    {authUsers[userId].name}
                  </option>
                ))}
              </select>
              <button
                id="myBtn"
                className="fluid primary ui button"
                onClick={this.onLoginSubmit}
              >
                Log In
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { authUsers: state.users };
};
export default connect(mapStateToProps)(LogIn);

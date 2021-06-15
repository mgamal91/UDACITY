import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { handleAddQuestion } from "../actions/questions";

export class NewQuestionCard extends Component {
  state = { optionOne: "", optionTwo: "", toHome: false };
  onInputChange = (event, option) => {
    const { value } = event.target;
    if (option === "option1") {
      this.setState({ optionOne: value });
    } else {
      this.setState({ optionTwo: value });
    }
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    console.log("submit", this.state);
    const { optionOne, optionTwo } = this.state;
    const { authedUser, dispatch } = this.props;
    /* dispatch(handleAddQuestion(optionOne, optionTwo, authedUser)) */
    /* react-redux-loading refuses to be installed so i had to handle loading manually */
    dispatch(handleAddQuestion(optionOne, optionTwo, authedUser)).then(() =>
      this.setState({ toHome: true })
    );
    this.setState({ optionOne: "", optionTwo: "" });
    document.getElementById("myBtn").classList =
      "ui fluid primary loading button";
    document.getElementById("newQuestionInput1").disabled = true;
    document.getElementById("newQuestionInput2").disabled = true;
  };
  render() {
    const { user } = this.props;
    const { name, avatarURL } = user;
    const { optionOne, optionTwo, toHome } = this.state;
    const charsLeft1 = 30 - optionOne.length;
    const charsLeft2 = 30 - optionTwo.length;
    if (toHome === true) {
      return <Redirect to="/"></Redirect>;
    }
    return (
      <div className="newQuestionMainDiv">
        <div className="newQuestionUserDiv">
          <h2>{name}</h2>
          <img
            src={avatarURL}
            className="ui image rounded small"
            alt="userImg"
          />
        </div>
        <div className="newQuestionQDiv">
          <h1>Would You Rather!</h1>

          <form onSubmit={this.onFormSubmit}>
            <div className="newQuestionQDivForm">
              <div className="ui fluid action input">
                <input
                  type="text"
                  name="option1"
                  id="newQuestionInput1"
                  placeholder="Option 1..."
                  value={this.state.optionOne}
                  onChange={(event) => this.onInputChange(event, "option1")}
                  maxLength="30"
                  required
                ></input>
              </div>
              {charsLeft1 <= 5 && (
                <div className="option-length">
                  <span>Chars Left:{charsLeft1}</span>
                </div>
              )}
              <h2>Or</h2>
              <div className="ui fluid action input">
                <input
                  type="text"
                  name="option2"
                  id="newQuestionInput2"
                  placeholder="Option 2..."
                  value={this.state.optionTwo}
                  onChange={(event) => this.onInputChange(event, "option2")}
                  maxLength="30"
                  required
                ></input>
              </div>
              {charsLeft2 <= 5 && (
                <div className="option-length">
                  <span>Chars Left:{charsLeft2}</span>
                </div>
              )}
            </div>
            <div>
              <button
                id="myBtn"
                className="fluid blue ui button"
                disabled={optionOne === "" || optionTwo === ""}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const { authedUser, users } = state;
  const user = users[authedUser];
  return { user, authedUser };
};
export default connect(mapStateToProps)(NewQuestionCard);

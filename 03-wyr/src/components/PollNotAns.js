import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAnswerQuestion } from "../actions/questions";
export class PollNotAns extends Component {
  onChoiceSelect = (event, option) => {
    event.preventDefault();
    console.log("myChoice", option);
    const { dispatch, authedUser, id } = this.props;
    //{authedUser, qid, answer}
    dispatch(
      handleAnswerQuestion({ authedUser: authedUser, qid: id, answer: option })
    );
    /* react-redux-loading refuses to be installed so i had to handle loading manually */
    document.getElementById("PollNotAnsInput1").classList =
      "ui fluid primary loading button";
    document.getElementById("PollNotAnsInput2").classList =
      "ui fluid primary loading button";
  };
  render() {
    const { question, questionAuthor } = this.props;
    const { optionOne, optionTwo } = question;
    const { avatarURL, name } = questionAuthor;
    return (
      <div className="PollNotAnsMainDiv">
        <div className="PollNotAnsUserDiv">
          <h2>{name}</h2>
          <img
            src={avatarURL}
            className="ui image rounded small"
            alt="userImg"
          />
        </div>
        <div className="PollNotAnsOptions">
          <h1>Would You Rather!</h1>
          <div className="PollNotAnsButtonsDiv">
            <button
              className="fluid green ui button"
              id="PollNotAnsInput1"
              onClick={(event) => this.onChoiceSelect(event, "optionOne")}
            >
              {optionOne.text}
            </button>
            <h3>Or</h3>
            <button
              className="fluid red ui button"
              id="PollNotAnsInput2"
              onClick={(event) => this.onChoiceSelect(event, "optionTwo")}
            >
              {optionTwo.text}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(PollNotAns);

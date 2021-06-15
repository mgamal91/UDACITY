import React, { Component } from "react";
import { connect } from "react-redux";
export class LeaderBoardCard extends Component {
  render() {
    const { user, rank, userQuestions, userAnswers, userScore } = this.props;
    const { name, avatarURL } = user;
    return (
      <div className="leaderBoardCardOuterDiv">
        <div className="leaderBoardCardiconDiv">
          {/* loop over rank to change color */}
          {rank === 1 ? (
            <i className="top right chess trophy yellow large borded inverted icon">
              {rank}st
            </i>
          ) : rank === 2 ? (
            <i className="top right chess queen olive large borded inverted icon">
              {rank}nd
            </i>
          ) : (
            rank === 3 && (
              <i className="top right chess chess knight red large borded inverted icon">
                {rank}rd
              </i>
            )
          )}
          {/* end of changing color */}
        </div>
        <div className="leaderBoardCardImgDiv">
          <img
            src={avatarURL}
            className="ui image rounded small"
            alt="userImg"
          />
        </div>

        <div className="leaderBoardCardDataDiv">
          <h1>{name}</h1>
          <p>Answered Questions:</p>
          <p>{userAnswers}</p>
          <p>Asked Questions:</p>
          <p>{userQuestions}</p>
        </div>
        <div className="scoreContainerDiv">
          <div id="scoreDiv">
            <p id="scoreP">Score:</p>
            <p>{userScore}</p>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  const { userId } = ownProps;
  const { users } = state;
  const user = users[userId];
  const userAnswers = Object.keys(user.answers).length;
  const userQuestions = user.questions.length;
  const userScore = userQuestions + userAnswers;
  return { userId, user, userQuestions, userAnswers, userScore };
};
export default connect(mapStateToProps)(LeaderBoardCard);

import React, { Component } from "react";
import { Progress } from "reactstrap";
export class PollAnswered extends Component {
  render() {
    const { question, questionAuthor, user } = this.props;
    const { optionOne, optionTwo } = question;
    const { avatarURL, name } = questionAuthor;
    const length1 = optionOne.votes.length;
    const length2 = optionTwo.votes.length;
    const totalLength = length1 + length2;
    const percentage1 = Math.round((length1 / totalLength) * 100);
    /* const percentage2=(length2/totalLength)*100; */
    const percentage2 = 100 - percentage1;
    const userAnswer = user.answers[question.id];
    console.log("userANswer", userAnswer);

    return (
      <div className="ui container">
        <div className="PollAnsMainDiv">
          <div className="PollAnsUserDiv">
            <h2>{name}</h2>
            <img
              src={avatarURL}
              className="ui image rounded small"
              alt={name}
            />
          </div>
          <div className="QuestionElementOptions">
            <h1>Would You Rather!</h1>

            <p>
              {" "}
              {userAnswer === "optionOne" && (
                <i className="asterisk loading icon"></i>
              )}
              {optionOne.text}
            </p>
            <Progress
              value={percentage1}
              color="success"
              style={{ height: "25px" }}
            >
              {percentage1}%
            </Progress>
            <p>Number of voters: {length1}</p>
            <hr />
            <p>
              {" "}
              {userAnswer === "optionTwo" && (
                <i className="asterisk loading icon"></i>
              )}
              {optionTwo.text}
            </p>
            <Progress
              value={percentage2}
              color="danger"
              style={{ height: "25px" }}
            >
              {percentage2}%
            </Progress>
            <p>Number of voters: {length2}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default PollAnswered;

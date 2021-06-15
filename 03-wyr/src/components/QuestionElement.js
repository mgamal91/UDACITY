import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
export class QuestionElement extends Component {
  render() {
    const { buttonText, question, user, id } = this.props;
    const { avatarURL, name } = user;
    const { optionOne, optionTwo } = question;
    return (
      <div className="ui container">
        <div className="QuestionElementMainDiv">
          <div className="QuestionElementUser">
            <p>{name}</p>
            <img
              src={avatarURL}
              className="ui image rounded small"
              alt={name}
            />
          </div>
          <div className="QuestionElementOptions">
            <div className="QuestionElementOptionsText">
              <h3 style={{ marginTop: "5px" }}>{optionOne.text}</h3>
              <h2>Or</h2>
              <h3>{optionTwo.text}</h3>
            </div>
            <div className="QuestionElementButton">
              {question && (
                <Link to={`/questions/${id}`}>
                  <button
                    id="myBtn"
                    className="fluid blue large ui button"
                    onClick={() => console.log(this.props)}
                  >
                    {buttonText}
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  const { questions, users, authedUser } = state;
  const { id } = ownProps;
  const question = questions[id];
  const user = users[question.author];
  return { authedUser, question, user };
};

export default connect(mapStateToProps)(QuestionElement);

import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Row, Col } from "reactstrap";
import QuestionElement from "../components/QuestionElement";
import AllDone from "./AllDone";
export class UnAnsweredPollsView extends Component {
  render() {
    const { questionIds, filteredQuestions } = this.props;
    const unanswered = questionIds.length - filteredQuestions.length;
    return (
      <div>
        {unanswered === 0 && <AllDone />}
        {questionIds.map((id) =>
          /* unanswered then you wont find id inside the filtered question */
          !filteredQuestions.includes(id) ? (
            <Row key={id} style={{ marginBottom: "5px" }}>
              <Col sm="12">
                <Card body outline color="primary">
                  <QuestionElement buttonText="Answer" id={id} />
                </Card>
              </Col>
            </Row>
          ) : null
        )}

        {console.log("unanswered", unanswered)}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const { authedUser, users, questions } = state;
  const questionIds = Object.keys(questions).sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  );
  const user = users[authedUser];
  const answeredPollQ = user ? user.answers : {};
  const answeredPollQArray = answeredPollQ ? Object.keys(answeredPollQ) : [];
  //filter the questionIds array to return the questionId that exist in the answeredPollQArray
  //find->stop as soon as you find an array element
  const filteredQuestions = questionIds.filter((id) =>
    answeredPollQArray.find((questionId) => questionId === id)
  );
  return {
    questionIds,
    filteredQuestions,
  };
};

export default connect(mapStateToProps)(UnAnsweredPollsView);

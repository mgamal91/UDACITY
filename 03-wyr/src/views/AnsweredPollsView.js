import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Row, Col } from "reactstrap";
import QuestionElement from "../components/QuestionElement";
import NothingDone from "./NothingDone";
export class AnsweredPollsView extends Component {
  render() {
    const { questionIds, filteredQuestions } = this.props;
    const answered = filteredQuestions.length;
    return (
      <div>
        {answered === 0 && <NothingDone />}
        {questionIds.map((id) =>
          filteredQuestions.includes(id) ? (
            <Row key={id} style={{ marginBottom: "5px" }}>
              <Col sm="12">
                <Card body outline color="primary">
                  <QuestionElement buttonText="Result" id={id} />
                </Card>
              </Col>
            </Row>
          ) : null
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const { questions, authedUser, users } = state;
  const questionIds = Object.keys(questions).sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  );
  const user = users[authedUser];
  const answeredPollQ = user ? user.answers : null;
  const answeredPollQArray = answeredPollQ ? Object.keys(answeredPollQ) : [];
  const filteredQuestions = questionIds.filter((id) =>
    answeredPollQArray.find((questionId) => questionId === id)
  );
  return {
    questionIds,
    filteredQuestions,
  };
};

export default connect(mapStateToProps)(AnsweredPollsView);

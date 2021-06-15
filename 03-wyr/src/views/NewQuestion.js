import React, { Component } from "react";
import NewQuestionCard from "../components/NewQuestionCard";

export class NewQuestion extends Component {
  render() {
    return (
      <div className="ui raised padded text container segment">
        <div className="ui labeled" tabIndex="0">
          <NewQuestionCard />
        </div>
      </div>
    );
  }
}

export default NewQuestion;

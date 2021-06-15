import React, { Component } from "react";
import { connect } from "react-redux";
import LeaderBoardCard from "../components/LeaderBoardCard";

export class LeaderBoard extends Component {
  render() {
    const { sortedIds } = this.props;
    console.log("memo", sortedIds);
    return (
      <div className="ui raised padded text container segment">
        {sortedIds.map((sortedId) => (
          <LeaderBoardCard
            userId={sortedId}
            rank={sortedIds.indexOf(sortedId) + 1}
            key={sortedId}
          />
        ))}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const { users } = state;
  const usersId = Object.keys(users);
  const sortedIds = usersId.sort(
    (a, b) =>
      users[b].questions.length +
      Object.keys(users[b].answers).length -
      (users[a].questions.length + Object.keys(users[a].answers).length)
  );
  return { sortedIds };
};
export default connect(mapStateToProps)(LeaderBoard);

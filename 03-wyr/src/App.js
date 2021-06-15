import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";
import Nav from "./views/Nav";
import Home from "./views/Home";
import NewQuestion from "./views/NewQuestion";
import LeaderBoard from "./views/LeaderBoard";
import P404 from "./views/P404";
import LogIn from "./views/LogIn";
import ClickedQuestion from "./components/ClickedQuestion";
import { handleInitialData } from "./actions";

export class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    console.log("state is", this.props);
    const { authedUser } = this.props;
    return (
      <div className="App">
        <Router>
          <Nav />
          {authedUser === null ? (
            <LogIn />
          ) : (
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/add" component={NewQuestion} />
              <Route path="/leaderboard" component={LeaderBoard} />
              <Route
                path="/questions/:question_id"
                component={ClickedQuestion}
              />
              <Route component={P404} />
            </Switch>
          )}
        </Router>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    questions: state.questions,
    users: state.users,
    authedUser: state.authedUser,
  };
};
export default connect(mapStateToProps)(App);

import React, { Component } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";
import AnsweredPollsView from "./AnsweredPollsView";
import UnAnsweredPollsView from "./UnAnsweredPollsView";

export class Home extends Component {
  state = { activeTab: "1" };

  render() {
    const { activeTab } = this.state;
    const toggle = (tab) => {
      if (activeTab !== tab) {
        this.setState({ activeTab: tab });
      }
    };

    return (
      <div className="ui raised padded text container segment">
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "1" })}
              onClick={() => {
                toggle("1");
              }}
              style={{ cursor: "pointer" }}
            >
              Unanswered Questions
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "2" })}
              onClick={() => {
                toggle("2");
              }}
              style={{ cursor: "pointer" }}
            >
              Answered Questions
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          {/* answered questions start */}
          <TabPane tabId="1">
            <UnAnsweredPollsView />
          </TabPane>
          {/* answered questions end */}
          <TabPane tabId="2">
            {/* loop over answered questions start */}
            <AnsweredPollsView />
            {/* loop over answered questions end */}
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

export default Home;

import React from "react";
import axios from "axios";
import Header from "./Header";
import ContestPreview from "./ContestPreview";
import testData from "../testData.json";

class App extends React.Component {
  state = { pageHeader: "Naming Contests", contests: this.props.initialContests };

  componentDidMount() {
  }

  componentWillUnmount() {}

  render() {
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        <div>
          {this.state.contests.map(contest => (
            <ContestPreview key={contest.id} {...contest} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;

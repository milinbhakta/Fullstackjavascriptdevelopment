import React from "react";
import axios from "axios";
import Header from "./Header";
import testData from "../testData.json";
import ContestList from "./ContestList";

class App extends React.Component {
  state = { pageHeader: "Naming Contests", contests: this.props.initialContests };

  componentDidMount() {
  }

  componentWillUnmount() {}

  render() {
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        <ContestList contests={this.state.contests} />
      </div>
    );
  }
}

export default App;

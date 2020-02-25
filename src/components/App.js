import React from "react";
import axios from "axios";
import Header from "./Header";
import ContestPreview from "./ContestPreview";
import testData from "../testData.json";

class App extends React.Component {
  state = { pageHeader: "Naming Contests", contests: [] };

  componentDidMount() {
    axios
      .get("/api/contests")
      .then(resp => {
        console.log(resp.data.contests);
        this.setState({
            contests: resp.data.contests
          });
      })
      .catch(console.error());
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

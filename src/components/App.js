import React from "react";
import axios from "axios";
import Header from "./Header";
import testData from "../testData.json";
import ContestList from "./ContestList";
import ContestPreview from "./ContestPreview";
import Contest from "./Contest";

const pushState = (obj, url) =>{
  window.history.pushState(obj,'',url);
};

class App extends React.Component {
  state = { pageHeader: "Naming Contests", contests: this.props.initialContests };

  componentDidMount() {
  }

  componentWillUnmount() {}

  fetchContest = (contestId) => {
    pushState({currentContestId: contestId},`/contest/${contestId}`);
    //lookup the contest
    //this.state.contests[contestId]
    this.setState({
      pageHeader:this.state.contests[contestId].contestName,
      currentContestId:  contestId
    });
  };

  currentContest(){
    if(this.state.currentContestId){
      return <Contest {...this.state.contests[this.state.currentContestId]}/>
    }
    return <ContestList onContestClick={this.fetchContest} contests={this.state.contests} />
  }

  render() {
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        {this.currentContest()}
      </div>
    );
  }
}

export default App;

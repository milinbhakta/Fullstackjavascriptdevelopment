const React = require("react");
const ReactDOM = require("react-dom");
const propTypes = require("prop-types");

const Header = ({message})=>{
    return(
        <h2 className="Header text-center">
            { message }
        </h2>
    );
};

Header.propTypes = {
    message: propTypes.string
};

const APP = () => {
  return (
    <div className="App">
      <Header message="Naming Contests" />
      <div>...</div>
    </div>
  );
};


ReactDOM.render(<APP />, document.getElementById("root"));

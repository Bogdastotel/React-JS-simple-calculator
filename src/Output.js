import React from "react";
import "./Output.css";

//output the result

class Output extends React.Component {
  render() {
    return (
      <div className="output">
        <h1>{this.props.result}</h1>
      </div>
    );
  }
}

export default Output;

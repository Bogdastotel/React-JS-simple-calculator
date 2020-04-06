import React from "react";
import Output from "./Output";
import "./App.css";
import Board from "./Board";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      result: ""
    };
  }

  buttonPressed = buttonName => {
    let operands = ["+", "-", "*", "/", "."];

    if (buttonName === "AC") {
      this.setState({
        result: ""
      });
    } else if (buttonName === "CE") {
      this.setState({
        result: this.state.result.toString().slice(0, -1)
      });
    } else if (buttonName === "=") {
      this.setState(prevState => ({
        result: eval(prevState.result).toString()
      }));
    } else {
      if (
        this.state.result === "" ||
        !isNaN(this.state.result[this.state.result.length - 1])
      ) {
        this.setState(prevState => ({
          result: prevState.result + buttonName
        }));
      } else if (operands.lastIndexOf(buttonName) === -1) {
        this.setState(prevState => ({
          result: prevState.result + buttonName
        }));
      }
    }
  };
  render() {
    return (
      <div className="container">
        <Output result={this.state.result} />
        <Board
          buttonPressed={this.buttonPressed}
          dotPressed={this.dotPressed}
        />
      </div>
    );
  }
}

export default App;

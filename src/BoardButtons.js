import React from "react";

class BoardButtons extends React.Component {
  buttonPressed = e => {
    this.props.buttonPressed(e.target.name);
  };

  render() {
    return (
      <div>
        <div>
          <button name="1" onClick={this.buttonPressed}>
            1
          </button>
          <button name="2" onClick={this.buttonPressed}>
            2
          </button>
          <button name="3" onClick={this.buttonPressed}>
            3
          </button>
          <button name="AC" onClick={this.buttonPressed}>
            AC
          </button>
          <button name="CE" onClick={this.buttonPressed}>
            CE
          </button>
        </div>
        <div>
          <button name="4" onClick={this.buttonPressed}>
            4
          </button>
          <button name="5" onClick={this.buttonPressed}>
            5
          </button>
          <button name="6" onClick={this.buttonPressed}>
            6
          </button>
          <button name="+" onClick={this.buttonPressed}>
            +
          </button>
          <button name="-" onClick={this.buttonPressed}>
            -
          </button>
        </div>
        <div>
          <button name="7" onClick={this.buttonPressed}>
            7
          </button>
          <button name="8" onClick={this.buttonPressed}>
            8
          </button>
          <button name="9" onClick={this.buttonPressed}>
            9
          </button>
          <button name="*" onClick={this.buttonPressed}>
            *
          </button>
          <button name="/" onClick={this.buttonPressed}>
            /
          </button>
        </div>
        <div>
          <button name="0" onClick={this.buttonPressed}>
            0
          </button>
          <button name="." onClick={this.buttonPressed}>
            .
          </button>
          <button name="=" onClick={this.buttonPressed}>
            =
          </button>
        </div>
      </div>
    );
  }
}

export default BoardButtons;

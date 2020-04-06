import React from "react";
import "./board.css";
import BoardButtons from "./BoardButtons";

//overall board

class Board extends React.Component {
  render() {
    return (
      <div className="board">
        <BoardButtons
          buttonPressed={this.props.buttonPressed}
          dotPressed={this.props.dotPressed}
        />
      </div>
    );
  }
}

export default Board;

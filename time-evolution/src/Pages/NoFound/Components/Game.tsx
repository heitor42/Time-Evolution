import React from 'react';
import './style.css';

interface ISquareProps {
  value: number;
  onClick: any;
}

interface ISquareState {
  value?: string | null;
}

interface IBoardProps {
}

interface IBoardState {
  squares: any;
  xIsNext: boolean;
}

function calculateWinner(squares: any) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  if (squares.find((e: any) => e === null) !== null) {
    return "tie"
  }
  return null;
}

function Square(props: ISquareProps) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component<IBoardProps, IBoardState> {
  constructor(props: IBoardProps) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    }
  }

  handleReset() {
    this.setState({
      squares: Array(9).fill(null),
      xIsNext: this.state.xIsNext,
    });
  }

  handleClick(i: number) {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) return;
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  renderSquare(i: number) {
    return <Square
      value={this.state.squares[i]}
      onClick={() => this.handleClick(i)}
    />;
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    // let status;
    // status = winner ? `Winner: ${winner}` : `Next player: ${this.state.xIsNext ? 'X' : 'O'}`

    return (
      <div>
        {/* <div className="status">{status}</div> */}
        <div className="grid">
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>

        {!winner ?
          <div className="player">
            <div className={this.state.xIsNext ? "playerShadow" : ""}>X</div>
            <div className={!this.state.xIsNext ? "playerShadow" : ""}>O</div>
          </div>
          :
          <div className="player">
            {winner === 'tie' ?
              <div className="playerTie" onClick={() => { this.handleReset() }}>Empate</div>
              :
              <div className="playerWinner" onClick={() => { this.handleReset() }}>{winner} won</div>
            }
          </div>
        }
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
      </div>
    );
  }
}

export default Game;

import { X, O, EMPTY, DRAW } from '../constants/gameConstants';

export default class Game {
  constructor(userId) {
    this.field = new Array(9).fill(EMPTY);
    this.players = new Map([[userId, X]]);
    this.whoseTurn = X;

    //lines to verify the game over 
    this.lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],

      [0,3,6],
      [1,4,7],
      [2,5,8],

      [0,4,8],
      [2,4,6],
    ];
  }

  addUser(userId) {
    if(this.players.size < 2) {
      this.players.set(userId, O);
      return true;
    } else if(this.players.has(userId)) {//this check need for connect
      return true;
    } else {
      return false;
    }
  }

  restart() {
    this.field.fill(EMPTY);
    this.whoseTurn = X;
    return true;
  }

  move(userId, cell) {
    //make a move only when cell isn't empty and player's turn 
    if(!this.field[cell] && this.whoseTurn === this.players.get(userId)) {
      this.whoseTurn = this.whoseTurn === X ? O : X

      //mark cell by player's sign
      this.field[cell] = this.players.get(userId);  
      return true;
    }
    return false;
  }

  checkWin() {
    //build an array of weights for every line of game field
    const weights = this.lines.map( (line) =>
      this.field
        .filter((cell, index) => line.includes(index))
        .reduce((a,b) => a*b)
    );

    if(weights.includes(8))
      return {winner: X, line: weights.indexOf(8)};
    else if(weights.includes(1))
      return {winner: O, line: weights.indexOf(1)};
    else if(!weights.includes(0))
      return {winner: DRAW};
    else
      return null;
  }
}
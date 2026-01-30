export class Board {
  constructor() {
    this.board = this.#initBoard();
  }

  #initBoard() {
    const board = [];
    for (let coorY = 0; coorY < 8; coorY++) {
      board.push([]);
      for (let coorX = 0; coorX < 8; coorX++) {
        board[coorY].push({ x: coorX, y: coorY });
      }
    }
    return board;
  }

  printBoard(knight) {
    const convertedBoard = [];
    for (let coorY = 0; coorY < 8; coorY++) {
      convertedBoard.push([]);
      for (let coorX = 0; coorX < 8; coorX++) {
        if (this.#positionIsEqual(this.board[coorY][coorX], knight.position))
          convertedBoard[coorY].push("1");
        else convertedBoard[coorY].push("0");
      }
    }
    return convertedBoard;
  }

  #positionIsEqual(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y;
  }
}

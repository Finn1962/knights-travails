import { Knight } from "./assets/create-knight.js";
import { Board } from "./assets/create-playing-board.js";
import { knightMoves } from "./assets/knight-moves.js";

export const playingBoard = new Board();

export const knight = new Knight({ x: 3, y: 4 });

console.log(playingBoard.printBoard(knight));

console.log(knightMoves({ x: 7, y: 2 }, knight, playingBoard));

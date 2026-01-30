import { knightMoves } from "../assets/knight-moves.js";
import { knight } from "../index.js";
import { playingBoard } from "../index.js";

beforeEach(() => {
  knight.position = { x: 3, y: 4 };
});

test("knightMove Test-eins", () => {
  const result = knightMoves({ x: 5, y: 3 }, knight, playingBoard);
  expect(result).toEqual({ x: 5, y: 3 });
});

test("knightMove Test-zwei", () => {
  const result = knightMoves({ x: 2, y: 6 }, knight, playingBoard);
  expect(result).toEqual({ x: 2, y: 6 });
});

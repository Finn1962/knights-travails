export function knightMoves(targetPosition, knight, playingBoard) {
  if (!targetIsWithinBoard(targetPosition)) return null;
  const board = playingBoard.board;
  const visitedPositions = [];
  const pathes = [];
  const queue = [knight.position];
  let parent = null;

  for (const position of queue) {
    const currentPosition = queue.shift();
    if (!visitedPositions.includes(currentPosition)) {
      writePathDiagram(currentPosition, parent);
      parent = currentPosition;
      if (positionIsEqual(currentPosition, targetPosition))
        return currentPosition;
      visitedPositions.push(currentPosition);
      queue.push(...findNextMoves(currentPosition, board));
    }
  }
}

function writePathDiagram(value, parent) {
  const diagram = {};
  if (Object.keys(diagram).length === 0) new Node(null, parent, value);
}

function Node(next, parent, value) {
  this.next = next;
  this.parent = parent;
  this.value = value;
}

function positionIsEqual(pos1, pos2) {
  return pos1.x === pos2.x && pos1.y === pos2.y;
}

function targetIsWithinBoard(targetPosition) {
  return (
    targetPosition.x <= 7 &&
    targetPosition.x >= 0 &&
    targetPosition.y <= 7 &&
    targetPosition.y >= 0
  );
}

function findNextMoves(currentPosition, board) {
  const moveOffsets = [
    { x: +1, y: -2 },
    { x: +2, y: -1 },
    { x: +2, y: +1 },
    { x: +1, y: +2 },
    { x: -1, y: +2 },
    { x: -2, y: +1 },
    { x: -2, y: -1 },
    { x: -1, y: -2 },
  ];
  const nextMoves = [];

  for (let i = 0; i < 8; i++) {
    const nextCoorY = currentPosition.y + moveOffsets[i].y;
    const nextCoorX = currentPosition.x + moveOffsets[i].x;
    if (targetIsWithinBoard({ y: nextCoorY, x: nextCoorX }))
      nextMoves.push(board[nextCoorY][nextCoorX]);
  }
  return nextMoves;
}

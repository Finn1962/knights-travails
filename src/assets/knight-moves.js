export function knightMoves(targetPosition, knight, playingBoard) {
  if (!targetIsWithinBoard(targetPosition)) return null;
  const board = playingBoard.board;
  const visitedPositions = [];
  const path = [];
  const queue = [knight.position];

  let i = 0;
  while (i < 2) {
    for (const position of queue) {
      const currentPosition = queue.shift();
      if (positionIsEqual(currentPosition, targetPosition))
        return currentPosition;
      queue.push(...findNextMoves(currentPosition, board));
      console.log(queue);
    }
    i++;
  }
}

function positionIsEqual(pos1, pos2) {
  return pos1.x === pos2.x && pos1.y === pos2.y;
}

function targetIsWithinBoard(targetPosition) {
  return (
    targetPosition.x < 7 &&
    targetPosition.x > 0 &&
    targetPosition.y < 7 &&
    targetPosition.y > 0
  );
}

function findNextMoves(currentPosition, board) {
  const nextMoves = [];
  if (
    targetIsWithinBoard({
      x: currentPosition.y - 2,
      y: currentPosition.x + 1,
    })
  )
    nextMoves.push(board[currentPosition.y - 2][currentPosition.x + 1]);
  if (
    targetIsWithinBoard({
      x: currentPosition.y - 1,
      y: currentPosition.x + 2,
    })
  )
    nextMoves.push(board[currentPosition.y - 1][currentPosition.x + 2]);
  if (
    targetIsWithinBoard({
      x: currentPosition.y + 1,
      y: currentPosition.x + 2,
    })
  )
    nextMoves.push(board[currentPosition.y + 1][currentPosition.x + 2]);
  if (
    targetIsWithinBoard({
      x: currentPosition.y + 2,
      y: currentPosition.x + 1,
    })
  )
    nextMoves.push(board[currentPosition.y + 2][currentPosition.x + 1]);
  if (
    targetIsWithinBoard({
      x: currentPosition.y + 2,
      y: currentPosition.x - 1,
    })
  )
    nextMoves.push(board[currentPosition.y + 2][currentPosition.x - 1]);
  if (
    targetIsWithinBoard({
      x: currentPosition.y + 1,
      y: currentPosition.x - 2,
    })
  )
    nextMoves.push(board[currentPosition.y + 1][currentPosition.x - 2]);
  if (
    targetIsWithinBoard({
      x: currentPosition.y - 1,
      y: currentPosition.x - 2,
    })
  )
    nextMoves.push(board[currentPosition.y - 1][currentPosition.x - 2]);
  if (
    targetIsWithinBoard({
      x: currentPosition.y - 2,
      y: currentPosition.x - 1,
    })
  )
    nextMoves.push(board[currentPosition.y - 2][currentPosition.x - 1]);
  return nextMoves;
}

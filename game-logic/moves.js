import { ANtoXY, XYtoAN } from "./utilities.js"

const knightMoves = (position, board, squares) => {

  const [row, col] = ANtoXY(position);

  const results = [];

  const deltas = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2]
  ]

  for (let delta of deltas) {


    const [r, c] = delta;
    const newR = row + r;
    const newC = col + c;

    const rowInBounds = 0 <= newR && newR <= 7;
    const colInBounds = 0 <= newC && newC <= 7;

    if (rowInBounds && colInBounds) {
      if (!board[newR][newC]) {
        results.push([newR, newC])
      }
    }
  }

  return results.map(node => {
    const [row, col] = node;
    return squares[row][col];
  });
}

export { knightMoves };

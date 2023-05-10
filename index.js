import { XYtoAN, ANtoXY } from "./game-logic/utilities.js";
import { bPieces, wPieces } from "./game-logic/data.js";

import { knightMoves } from "./game-logic/moves.js";

const allSquares = [];

let selected = null;
let possibleMoves = [];

const virtualBoard = [
  ['bR', 'bN', 'bB', 'bQ', 'bK', 'bB', 'bN', 'bR'],
  ['bP', 'bP', 'bP', 'bP', 'bP', 'bP', 'bP', 'bP'],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  ['wP', 'wP', 'wP', 'wP', 'wP', 'wP', 'wP', 'wP'],
  ['wR', 'wN', 'wB', 'wQ', 'wK', 'wB', 'wN', 'wR'],
];

window.addEventListener("DOMContentLoaded", e => {

  buildBoard();
  placePieces();
  // addHoverEffect();
});

const buildBoard = () => {

  const board = document.querySelector('#board');

  // board.addEventListener('click', e => {
  //   console.log('Click event for board');
  // })

  const cols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

  for (let i = 8; i > 0; i--) {

    const row = document.createElement('div');
    row.classList.add('row');
    row.id = 'row-' + i

    const fullRow = [];
    allSquares.push(fullRow);

    for (let j = 0; j < 8; j++) {
      const col = cols[j];
      const square = document.createElement('div');

      addHoverEffect(square);

      square.classList.add('square');

      if (i % 2 !== 0) {
        square.classList.add(j % 2 !== 0 ? 'square-w' : 'square-b')
      }

      else square.classList.add(j % 2 !== 0 ? 'square-b' : 'square-w')

      square.id = col + i

      square.addEventListener('click', e => {
        // console.log('Click event for square');
        if (e.target.classList.contains('possible')) {
          const [row, col] = ANtoXY(e.target.id);
          selected.parentElement.removeChild(selected);

          selected.classList.remove('selected');

          for (let el of possibleMoves) {
            el.classList.remove('possible');
          }
          possibleMoves = [];

          const newParent = allSquares[row][col];
          newParent.appendChild(selected);

          selected = null;
        }
      })

      row.appendChild(square);
      fullRow.push(square);
    }

    board.appendChild(row);
  }
}

const addHoverEffect = (square) => {

  square.addEventListener('mouseenter', e => {
    e.target.classList.add('hover');
  })

  square.addEventListener('mouseleave', e => {
    e.target.classList.remove('hover');
  })
}

// const addHoverEffect = () => {

//   const board = document.querySelector('#board');

//   board.addEventListener('mouseover', e => {

//     if (e.target.classList.contains('square')) {
//       e.target.classList.add('hover');
//     }
//   })

//   board.addEventListener('mouseout', e => {

//     if (e.target.classList.contains('square')) {
//       e.target.classList.remove('hover');
//     }
//   })
// }

const placePieces = () => {

  const createPieces = (data, color) => {

    const positions = data.start.map(pos => ANtoXY(pos));

    for (let [row, col] of positions) {

      const piece = document.createElement('img');
      piece.src = `images/${data.img}`;
      piece.alt = `${color} ${data.name.toLowerCase()}`;
      piece.classList.add('piece');
      piece.classList.add(`piece-${color[0]}`);

      if (data.name === 'Pawn') {
        piece.classList.add('unmoved');
      }

      piece.addEventListener('click', e => {
        // e.stopPropagation();
        // console.log('Click event for piece');
        if (!selected) {
          piece.classList.add('selected');
          selected = piece;
          possibleMoves = data.moves(piece.parentElement.id, virtualBoard, allSquares);
          for (let el of possibleMoves) {
            el.classList.add('possible');
          }
        }
      })

      const square = allSquares[row][col];
      square.appendChild(piece);
    }
  }

  for (let data of Object.values(bPieces)) {
    createPieces(data, 'black');
  }

  for (let data of Object.values(wPieces)) {
    createPieces(data, 'white');
  }
}

const movePiece = () => {

}

import { XYtoAN, ANtoXY } from "./game-logic/utilities.js";
import { bPieces, wPieces } from "./game-logic/data.js"

const allSquares = [];

const virtualBoard = [
  ['bR', 'bN', 'bB', 'bQ', 'bK', 'bB', 'bN', 'bR'],
  ['bP', 'bP', 'bP', 'bP', 'bP', 'bP', 'bP', 'bP'],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  ['wP', 'wP', 'wP', 'wP', 'wP', 'wP', 'wP', 'wP'],
  ['wR', 'wN', 'wB', 'wQ', 'wK', 'wB', 'wN', 'wR']
];

window.addEventListener("DOMContentLoaded", e => {

  buildBoard();
  console.log(allSquares);
  placePieces();

});

const buildBoard = () => {

  const board = document.querySelector('#board');

  const cols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

  for (let i = 8; i > 0; i--) {

    const row = document.createElement('div');
    row.classList.add('row');
    row.id = 'row-' + i

    const virtualRow = [];
    allSquares.push(virtualRow);

    for (let j = 0; j < 8; j++) {
      const col = cols[j];
      const square = document.createElement('div');

      addHoverEffect(square);
      addSelect(square);

      if (i % 2 !== 0) {
        square.classList.add(j % 2 !== 0 ? 'square-w' : 'square-b')
      }

      else square.classList.add(j % 2 !== 0 ? 'square-b' : 'square-w')

      square.classList.add('square');
      square.id = col + i
      row.appendChild(square);
      virtualRow.push(square);
    }

    board.appendChild(row);
  }
}

const addHoverEffect = (square) => {

  square.addEventListener('mouseenter', e => {
    e.target.classList.add('hover');
    // e.target.innerText = e.target.id;
  })

  square.addEventListener('mouseleave', e => {
    e.target.classList.remove('hover');
    // e.target.innerText = null;
  })
}

const addSelect = (square) => {

  square.addEventListener('click', e => {
    console.log(e.target.id, ANtoXY(e.target.id))
  })
}

const placePieces = () => {

  for (let data of Object.values(bPieces)) {

    const piece = document.createElement('img');

    for (let pos of data.start) {

    }
  }
}

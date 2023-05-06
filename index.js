import { XYtoAN, ANtoXY } from "./game-logic/utilities.js";
import { bPieces, wPieces } from "./game-logic/data.js"

const allSquares = [];

window.addEventListener("DOMContentLoaded", e => {

  buildBoard();
  placePieces();
  console.log(allSquares);

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
  })

  square.addEventListener('mouseleave', e => {
    e.target.classList.remove('hover');
  })
}

const placePieces = () => {

  const createPieces = (data) => {

    const positions = data.start.map(pos => ANtoXY(pos));

    for (let [row, col] of positions) {

      const piece = document.createElement('img');
      piece.src = `images/${data.img}`;
      piece.alt = `black ${data.name.toLowerCase()}`
      piece.classList.add('piece');

      const square = allSquares[row][col];
      square.appendChild(piece);
    }
  }

  for (let data of Object.values(bPieces)) {
    createPieces(data);
  }

  for (let data of Object.values(wPieces)) {
    createPieces(data);
  }
}

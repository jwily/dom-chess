import { knightMoves } from "./moves.js";

const bPieces = {
  K: {
    name: 'King',
    start: ['e8'],
    img: 'b_king_svg_NoShadow.svg'
  },
  Q: {
    name: 'Queen',
    start: ['d8'],
    img: 'b_queen_svg_NoShadow.svg'
  },
  B: {
    name: 'Bishop',
    start: ['c8', 'f8'],
    img: 'b_bishop_svg_NoShadow.svg'
  },
  N: {
    name: 'Knight',
    start: ['b8', 'g8'],
    img: 'b_knight_svg_NoShadow.svg',
    moves: knightMoves
  },
  R: {
    name: 'Rook',
    start: ['a8', 'h8'],
    img: 'b_rook_svg_NoShadow.svg'
  },
  P: {
    name: 'Pawn',
    start: ['a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7'],
    img: 'b_pawn_svg_NoShadow.svg'
  }
}

const wPieces = {
  K: {
    name: 'King',
    start: ['e1'],
    img: 'w_king_svg_NoShadow.svg'
  },
  Q: {
    name: 'Queen',
    start: ['d1'],
    img: 'w_queen_svg_NoShadow.svg'
  },
  B: {
    name: 'Bishop',
    start: ['c1', 'f1'],
    img: 'w_bishop_svg_NoShadow.svg'
  },
  N: {
    name: 'Knight',
    start: ['b1', 'g1'],
    img: 'w_knight_svg_NoShadow.svg',
    moves: knightMoves
  },
  R: {
    name: 'Rook',
    start: ['a1', 'h1'],
    img: 'w_rook_svg_NoShadow.svg'
  },
  P: {
    name: 'Pawn',
    start: ['a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2'],
    img: 'w_pawn_svg_NoShadow.svg'
  }
}

export { bPieces, wPieces };

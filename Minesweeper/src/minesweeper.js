

const generatePlayerBoard = (numberOfRows, numberOfColumns) => {

 const board = [];
  for (i = 0; i < numberOfRows; i++) {
    const row = [];
    for (k = 0; k < numberOfColumns; k++) {
    row.push(' ');
    }
    board.push(row);
  }

  return board;
};


 const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {

  const board = [];
  for (i = 0; i < numberOfRows; i++) {
    const row = [];
    for (k = 0; k < numberOfColumns; k++) {
    row.push(null);
    }
    board.push(row);
  }

  let numberOfBombsPlaced = 0;
  while (numberOfBombsPlaced < numberOfBombs) {
    const randomRowIndex = Math.floor(Math.random() * numberOfRows);
    const randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
     board[randomRowIndex][randomColumnIndex] = 'B';
     numberOfBombsPlaced++;
     //edit to add control flow, bombs on bombs err
  }

  return board;
};


const printBoard = (board) => {
  board.map(func = (row) => {
    console.log(row.join(' | '));
  }).join('\n');

//  const printBoard = board => {
//  console.log(board.map(row => row.join(' | ')).join('\n'));
// };

  //console.log(board[0].join(' | '));
  //console.log(board[1].join(' | '));
  //console.log(board[2].join(' | '));

};

const playerBoard = generatePlayerBoard(3, 4);
const bombBoard = generateBombBoard(3, 4, 5);

console.log('Player Board: ');
printBoard(playerBoard);

console.log('Bomb Board: ');
printBoard(bombBoard);

//console.log(printBoard(generatePlayerBoard(4, 3)));

/*
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

printBoard(board);
board[0][1] = '1';
board[2][2] = 'B';
printBoard(board);
*/
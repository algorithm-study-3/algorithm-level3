//const readLine = require('fs').readFileSync('dev/stdin').toString().trim();

const readLine = `........
..F.....
.....F..
.....F..
........
........
.......F
.F......`;

const [...input] = readLine.split("\n");
const currentBoard = input.map((board) => board.split(""));
const chessBoard = [
  ["W", "B", "W", "B", "W", "B", "W", "B"],
  ["B", "W", "B", "W", "B", "W", "B", "W"],
  ["W", "B", "W", "B", "W", "B", "W", "B"],
  ["B", "W", "B", "W", "B", "W", "B", "W"],
  ["W", "B", "W", "B", "W", "B", "W", "B"],
  ["B", "W", "B", "W", "B", "W", "B", "W"],
  ["W", "B", "W", "B", "W", "B", "W", "B"],
  ["B", "W", "B", "W", "B", "W", "B", "W"],
];

let answer = 0;

for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    if (chessBoard[i][j] === "W" && currentBoard[i][j] === "F") {
      answer += 1;
    }
  }
}

console.log(answer);

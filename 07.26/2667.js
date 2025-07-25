//const readLine = require('fs').readFileSync('dev/stdin').toString().trim();

const readLine = `7
0110100
0110101
1110101
0000111
0100000
0111110
0111000`;

class Queue {
  constructor() {
    this.items = [];
    this.front = 0;
    this.rear = 0;
  }

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  shift() {
    return this.items[this.front++];
  }

  isEmpty() {
    return this.front === this.rear;
  }
}

const [N, ...input] = readLine.split("\n");
const MAP = input.reduce((acc, cur) => {
  const splitNumber = cur.split("").map((num) => parseInt(num, 10));
  acc.push(splitNumber);

  return acc;
}, []);

const queue = new Queue();
const visited = Array.from(Array(MAP.length), () => Array(MAP[0].length).fill(false));
const answer = [];

for (let i = 0; i < MAP.length; i++) {
  for (let j = 0; j < MAP[0].length; j++) {
    if (MAP[i][j] !== 0 && visited[i][j] === false) {
      queue.push([i, j]);
      let count = 0;
      while (!queue.isEmpty()) {
        const direction = [
          [-1, 0],
          [0, 1],
          [1, 0],
          [0, -1],
        ];
        const [Y, X] = queue.shift();

        if (visited[Y][X]) continue;

        if (MAP[Y][X] === 1) {
          count += 1;
        }
        visited[Y][X] = true;

        for (const [col, row] of direction) {
          const newY = Y + row;
          const newX = X + col;

          if (newY >= 0 && newY < MAP.length && newX >= 0 && newX < MAP[0].length && !visited[newY][newX] && MAP[newY][newX] === 1) {
            queue.push([newY, newX]);
          }
        }
      }
      answer.push(count);
    }
  }
}
console.log(answer.length);
console.log(answer.sort().join("\n"));

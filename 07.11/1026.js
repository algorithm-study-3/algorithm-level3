//const readLine = require('fs').readFileSync('dev/stdin').toString().trim();
const readLine = `3
1 1 3
10 30 20`;
const [N, A, B] = readLine.split('\n');
const arrA = A.split(' ')
  .map(Number)
  .sort((a, b) => a - b);
const arrB = B.split(' ')
  .map(Number)
  .sort((a, b) => b - a);

let answer = 0;
for (let i = 0; i < N; i++) {
  answer += arrA[i] * arrB[i];
}

console.log(answer);

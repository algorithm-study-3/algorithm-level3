//const readLine = require('fs').readFileSync('dev/stdin').toString().trim();
const readLine = `10 2
3 -2 -4 -9 0 3 7 13 8 -3`;
const [M, ...input] = readLine.split('\n');
const [N, K] = M.split(' ').map(Number);
const arrInput = input[0].split(' ').map(Number);
const arr = [0];

for (let i = 1; i <= N; i++) {
  arr[i] = arr[i - 1] + arrInput[i - 1];
}

let max = Number.MIN_SAFE_INTEGER;
for (let i = K; i <= N; i++) {
  max = Math.max(max, arr[i] - arr[i - K]);
}
console.log(max);

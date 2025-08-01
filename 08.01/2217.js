//const readLine = require('fs').readFileSync('dev/stdin').toString().trim();

const readLine = `2
10
15`;

const [N, ...input] = readLine.split("\n");
const ropes = input.map((rope) => Number(rope)).sort((a, b) => a - b);

let maxWeight = 0;

for (let i = 0; i < N; i++) {
  const weight = ropes[i] * (N - i);
  maxWeight = Math.max(maxWeight, weight);
}
console.log(maxWeight);

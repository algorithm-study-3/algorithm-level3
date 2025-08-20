const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const numbers = input[1].split(' ').map(Number);

const dp = Array(N + 1).fill(0);
for (let i = 1; i <= N; i++) {
  dp[i] = dp[i - 1] + numbers[i - 1];
}

for (let i = 2; i < M + 2; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  const sum = dp[b] - dp[a - 1];
  console.log(sum);
}

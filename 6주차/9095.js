const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');

const T = Number(input[0]);

const dp = new Uint16Array(11).fill(0);
dp[1] = 1;
dp[2] = 2;
dp[3] = 4;
for (let i = 4; i <= dp.length; i++) {
  dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
}

const result = [];
for (let i = 1; i <= T; i++) {
  const number = Number(input[i]);
  result.push(dp[number]);
}

console.log(result.join('\n'));

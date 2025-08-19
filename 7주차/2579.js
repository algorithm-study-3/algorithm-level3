const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const count = Number(input[0]);
const stairs = Array(count + 1).fill(0);
for (let i = 1; i <= count; i++) {
  stairs[i] = Number(input[i]);
}

const dp = Array(count + 1).fill(0);
dp[1] = stairs[1];
if (count >= 2) dp[2] = stairs[1] + stairs[2];
if (count >= 3) dp[3] = Math.max(dp[1] + stairs[3], stairs[2] + stairs[3]);
for (let i = 4; i <= count; i++) {
  dp[i] = Math.max(
    stairs[i] + dp[i - 2],
    stairs[i] + stairs[i - 1] + dp[i - 3]
  );
}

console.log(dp[count]);

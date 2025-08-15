const fs = require('fs');
const input = Number(fs.readFileSync('/dev/stdin').toString().trim());

const dp = new Uint16Array(input + 1).fill(0);
for (let i = 2; i < dp.length + 1; i++) {
  dp[i] = dp[i - 1] + 1;
  if (i % 3 === 0) {
    dp[i] = Math.min(dp[Math.floor(i / 3)] + 1, dp[i]);
  }
  if (i % 2 === 0) {
    dp[i] = Math.min(dp[Math.floor(i / 2)] + 1, dp[i]);
  }
}

console.log(dp[input]);

function solution(triangle) {
  const N = triangle.length;
  const dp = Array.from({ length: N }, () => Array(N).fill(0));
  dp[N - 1] = triangle[N - 1];
  for (let i = N - 2; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      dp[i][j] = Math.max(dp[i + 1][j], dp[i + 1][j + 1]) + triangle[i][j];
    }
  }
  return dp[0][0];
}

solution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]);

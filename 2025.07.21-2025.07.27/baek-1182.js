function solution(N, S, numbers) {
  /**
   * 모든 경우의 수를 다 구해서 S 값이 되는 경우의 수를 모두 카운트헤야 한다.
   * -> bfs
   * -> O(2^n)
   * -> |S| <= 10^6
   */

  let count = 0;
  function dfs(index, sum) {
    if (index === N) {
      return;
    }

    sum += numbers[index];
    if (sum === S) {
      ++count;
    }

    // 이 지점에서 되고 안되고 2가지 경우 따짐..
    dfs(index + 1, sum);
    dfs(index + 1, sum - numbers[index]);
  }

  dfs(0, 0);

  return count;
}

console.log(solution(5, 0, [-7, -3, -2, 5, 8]));

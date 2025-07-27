function solution(n) {
  let answer = "";

  const arr = ["수", "박"];

  for (let i = 0; i < n; i++) {
    answer += arr[i % 2];
  }
  return answer;
}

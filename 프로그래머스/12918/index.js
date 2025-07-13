function solution(n) {
  if (n === 1) return 1;
  let answer = 0;
  const factors = factor(n);
  for (const num of factors) {
    answer += num;
  }
  return answer;
}

function factor(n) {
  const arr = [];
  for (let i = 0; i < n / 2; i++) {
    if (n % i === 0) {
      arr.push(i);
      arr.push(n / i);
    }
  }
  return new Set(arr);
}

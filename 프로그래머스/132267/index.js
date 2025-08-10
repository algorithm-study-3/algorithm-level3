function solution(a, b, n) {
  let answer = 0;
  let current = n;
  while (current >= a) {
    const value = Math.floor(current / a) * b;
    const rest = current % a;
    answer += value;
    current = value + rest;
  }

  return answer;
}

// a개의 빈병을 주면 b개의 콜라를 준다.
// n개의 빈병을 가져가면 난 몇개의 콜라를 받을 수 있을까?
// ex) 2개 -> 1개
// 19개를 가져가면 -> 10개

// 결국 마트에 못가는 경우

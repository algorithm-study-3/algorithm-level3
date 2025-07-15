# 📝 알고리즘 문제 풀이 - 2025-07-15

## 문제 📖

- **문제 링크:** [프로그래머스 - 카드 뭉치](https://school.programmers.co.kr/learn/courses/30/lessons/159994)

- **문제 유형:** 구현

- **난이도:** Level1

- **풀이 시간:** 15분

## ✍ 접근 방식

- 첫번재 시도 88.0 / 100.0

```javascript
function solution(cards1, cards2, goal) {
  var answer = "";

  for (let i of goal) {
    if (i === cards1[0]) {
      cards1.shift();
    }
    if (i === cards2[0]) {
      cards2.shift();
    }
  }

  if (cards1.length === 0 && cards2.length === 0) {
    answer = "Yes";
  } else answer = "No";

  return answer;
}
```

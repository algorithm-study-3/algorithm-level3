# algorithm_js

## 📝 알고리즘 문제 풀이 - 2025-07-12

### 문제

- 문제 링크 : [Valid Palindrome](https://leetcode.com/problems/valid-palindrome/description/)
- 문제 유형 : `two pointer`, `string`
- 난이도 : Easy
- 풀이 시간 : ⏰ 10min

### Approach

1. 문자열 s에서 영어 & 숫자를 제외한 값은 모두 제거해 cleanString을 만든다.
2. split을 사용해 배열로 변환한다.
3. reverse 메서드를 사용해 반대로 뒤집는다.
4. 반대로 뒤집은 문자열과 cleanString이 같은지 비교한 값을 반환한다.

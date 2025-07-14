function solution(s) {
  var answer = [];
  const letterMap = new Map();

  for (let i = 0; i < s.length; i++) {
    const letter = s[i];

    if (!letterMap.has(letter)) {
      answer.push(-1);
      letterMap.set(letter, i);
      continue;
    }

    answer.push(i - letterMap.get(letter));
    letterMap.set(letter, i);
  }
  return answer;
}

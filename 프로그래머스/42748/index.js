function solution(array, commands) {
  // 원본 배열은 살려놔야한다.

  const answer = [];

  commands.forEach(([i, j, k]) => {
    const newArray = array.slice(i - 1, j);
    newArray.sort((a, b) => a - b);
    answer.push(newArray[k - 1]);
  });

  return answer;
}

function solution(cards1, cards2, goal) {
  var answer = "Yes";

  while (goal.length > 0) {
    const target = goal.shift();

    if (target === cards1[0]) {
      cards1.shift();
      continue;
    }
    if (target === cards2[0]) {
      cards1.shift();
      continue;
    }

    answer = "No";
    break;
  }
  return answer;
}

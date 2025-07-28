function solution(a, b) {
  var answer = "";

  const days = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const date = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];

  let day = b;
  for (let i = 0; i < a; i++) day += days[i];

  answer = date[day % 7];

  return answer;
}

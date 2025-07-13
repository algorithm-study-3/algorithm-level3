function solution(k, score) {
  var answer = [];

  const hof = [];
  for (let i = 0; i < k; i++) {
    if (i >= score.length) break;
    const sco = score[i];
    hof.push(sco);
    answer.push(Math.min(...hof));
  }

  for (let i = k; i < score.length; i++) {
    const min = Math.min(...hof);
    if (score[i] > min) {
      const idx = hof.indexOf(min);
      hof[idx] = score[i];
    }
    answer.push(Math.min(...hof));
  }

  return answer;
}

console.log(solution(5, [100, 90, 80]));

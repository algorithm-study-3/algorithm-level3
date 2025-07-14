function solution(d, budget) {
  let sum = 0;
  d.sort((a, b) => a - b);
  const temp = [];
  for (let i = 0; i < d.length; i++) {
    sum += d[i];
    if (sum <= budget) temp.push(d[i]);
    else break;
  }

  return temp.length;
}

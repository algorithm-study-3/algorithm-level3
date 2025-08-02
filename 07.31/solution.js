function solution(answers) {
  var answer = [];

  const length = 10000;
  const first = new Array(length).fill(0);
  const second = new Array(length).fill(0);
  const third = new Array(length).fill(0);

  const person1 = [1, 2, 3, 4, 5];
  const person2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const person3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let count1 = 0;
  let count2 = 0;
  let count3 = 0;

  for (let i = 0; i < length; i++) {
    first[i] = person1[i % 5];
    second[i] = person2[i % 8];
    third[i] = person3[i % 10];
  }

  for (let i = 0; i < answers.length; i++) {
    if (first[i] === answers[i]) {
      count1++;
    }
    if (second[i] === answers[i]) {
      count2++;
    }
    if (third[i] === answers[i]) {
      count3++;
    }
  }
  const maxCount = Math.max(count1, count2, count3);

  if (count1 === maxCount) answer.push(1);
  if (count2 === maxCount) answer.push(2);
  if (count3 === maxCount) answer.push(3);

  return answer;
}

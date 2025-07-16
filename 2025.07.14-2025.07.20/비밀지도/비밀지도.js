function solution(n, arr1, arr2) {
  var answer = [];

  const board1 = [];
  const board2 = [];
  for (let i = 0; i < n; i++) {
    board1.push(arr1[i].toString(2).padStart(n, 0).split('').map(Number));
    board2.push(arr2[i].toString(2).padStart(n, 0).split('').map(Number));
  }

  for (let i = 0; i < n; i++) {
    let str = '';
    for (let j = 0; j < n; j++) {
      if (board1[i][j] || board2[i][j] !== 0) {
        str += '#';
      } else {
        str += ' ';
      }
    }
    answer.push(str);
  }

  return answer;
}

console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]));

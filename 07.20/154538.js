class Queue {
  constructor() {
    this.items = [];
    this.front = 0;
    this.rear = 0;
  }

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  shift() {
    return this.items[this.front++];
  }

  isEmpty() {
    return this.front === this.rear;
  }
}

function solution(x, y, n) {
  let answer = -1;

  // 초기값 선언
  const queue = new Queue();
  queue.push([x, 0]);
  const visited = new Array(y + 1).fill(false);
  // BFS
  while (!queue.isEmpty()) {
    const [X, count] = queue.shift();

    if (X > y) continue;
    if (visited[X]) continue;

    if (X === y) {
      answer = count;
      break;
    }
    visited[X] = true;

    // 다음 탐색
    for (let X_ of [X + n, X * 2, X * 3]) {
      queue.push([X_, count + 1]);
    }
  }

  return answer;
}

console.log(solution(10, 40, 5));

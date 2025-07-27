const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().trim().split('\n');

const n = +input[0];
const [start, end] = input[1].split(' ').map(Number); // 7, 3
const m = +input[2];

const graph = Array.from({ length: n + 1 }, () => []);
for (let i = 3; i < 3 + m; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

const visited = Array(n + 1).fill(false);
const distance = Array(n + 1).fill(0);

const queue = [start]; // [7]
visited[start] = true;

while (queue.length > 0) {
  const cur = queue.shift(); // cur=7, cur=2
  for (const next of graph[cur]) {
    // graph[cur]=[2], graph[cur]=[1,7,8,9]
    if (!visited[next]) {
      distance[next] = distance[cur] + 1; // distance[7]=0, distance[2]=1, distance[1]=2
      queue.push(next);
      visited[next] = true;
    }
  }
}

console.log(distance[end] === 0 ? -1 : distance[end]);

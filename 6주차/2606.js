const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const count = Number(input[0]);
const linkCount = Number(input[1]);

const links = Array.from({ length: count + 1 }, () => []);
for (let i = 2; i < linkCount + 2; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  links[a].push(b);
  links[b].push(a);
}

let result = 0;
const visited = new Array(count + 1).fill(false);
visited[1] = true;
function bfs(index) {
  for (const node of links[index]) {
    if (!visited[node]) {
      visited[node] = true;
      ++result;
      bfs(node);
    }
  }
}

bfs(1);

console.log(result);

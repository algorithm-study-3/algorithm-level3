//const readLine = require('fs').readFileSync('dev/stdin').toString().trim();
const readLine = `3 4 99
0 0 0 0
0 0 0 0
0 0 0 1`;
const [info, ...input] = readLine.split('\n');
const [n, m, b] = info.split(' ').map(Number);
const arr = input.map((i) => i.split(' ').map(Number));

let minTime = Number.MAX_SAFE_INTEGER;
let maxHeight = -1;

for (let h = 0; h <= 256; h++) {
  let inventory = 0;
  let removeCnt = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      const curh = arr[i][j] - h;

      if (curh < 0) inventory -= curh;
      else removeCnt += curh;
    }
  }

  if (removeCnt + b >= inventory) {
    const time = 2 * removeCnt + inventory;

    if (time <= minTime) {
      minTime = time;
      maxHeight = h;
    }
  }
}

console.log(`${minTime} ${maxHeight}`);

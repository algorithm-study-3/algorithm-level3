const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().trim().split('\n');

const N = Number(input[0]);
const tops = input[1].split(' ').map(Number);

const result = [];
const stack = [];
let index = 0;
while (index < N) {
  if (stack.length === 0) {
    result.push(0);
    stack.push([tops[index], index + 1]);
    ++index;
    continue;
  }
  if (stack[stack.length - 1][0] < tops[index]) {
    stack.pop();
  } else {
    result.push(stack[stack.length - 1][1]);
    stack.push([tops[index], index + 1]);
    ++index;
  }
}

console.log(result.join(' '));

//const readLine = require('fs').readFileSync('dev/stdin').toString().trim();
const readLine = `57 2`;
const [A, P] = readLine.split(" ").map((number) => parseInt(number, 10));

const newMap = new Map();
newMap.set(A, 1);

let before = A;
let i = 0;

while (true) {
  if (i === 9999) break;

  const numberArr = before.toString().split("");
  const newNumber = numberArr.reduce((acc, cur) => {
    acc += parseInt(cur, 10) ** P;
    return acc;
  }, 0);

  if (newMap.has(newNumber)) newMap.set(newNumber, newMap.get(newNumber) + 1);
  else newMap.set(newNumber, 1);

  before = newNumber;
  i++;
}

console.log(
  [...newMap].reduce((acc, cur) => {
    if (cur[1] === 1) acc += 1;
    return acc;
  }, 0)
);

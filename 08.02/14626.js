//const readLine = require('fs').readFileSync('dev/stdin').toString().trim();

const readLine = `9788968322*73`;

const N = readLine;
let answer = 0;
let numberType = "odd";
for (let i = 1; i <= N.length; i++) {
  const target = N[i - 1];
  if (target === "*") {
    if (i % 2 === 0) numberType = "even";
    continue;
  }

  if (i % 2 === 0) {
    answer += Number(target) * 3;
  } else {
    answer += Number(target);
  }
}
if (numberType === "odd") {
  console.log(10 - (answer % 10));
} else {
  for (let i = 0; i <= 9; i++) {
    if ((answer + i * 3) % 10 === 0) {
      console.log(i);
      break;
    }
  }
}

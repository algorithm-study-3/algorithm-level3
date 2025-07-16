//const readLine = require('fs').readFileSync('dev/stdin').toString().trim();
const readLine = `5 4
1
2
1
4
3
1
1
3
2`;
const [info, ...input] = readLine.split('\n');
const [N, M] = info.split(' ').map(Number);
const firstRace = input.splice(0, N).map(Number);
const secondRace = input.map(Number);

const players = [];

for (let i = 0; i < firstRace.length; i++) {
  players.splice(firstRace[i] - 1, 0, i + 1);
}

const secondPlayers = players.slice(0, M).reverse();

const answer = [];
for (let i = 0; i < secondRace.length; i++) {
  answer.splice(secondRace[i] - 1, 0, secondPlayers[i]);
}
console.log(answer.splice(0, 3).join('\n'));

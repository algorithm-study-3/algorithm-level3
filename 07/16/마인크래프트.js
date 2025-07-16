const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

const [N, M, B] = input[0].split(" ").map(Number)
const blocks = input.slice(1).map((row) => row.split(" ").map(Number))

let answerTime = Infinity

let answerHeight = 0
for (let height = 0; height <= 256; height += 1) {
  let addBlock = 0
  let removeBlock = 0
  let inventory = B

  for (let i = 0; i < N; i += 1) {
    for (let j = 0; j < M; j += 1) {
      const currentBlock = blocks[i][j]
      const diff = height - currentBlock // 현재 층수 - 쌓여있는 블락
      if (diff < 0) {
        // 쌓여있는 블락이 더 많다
        removeBlock += -diff
      } else {
        // 쌓여있는 블락이 더 적다
        addBlock += diff
      }
    }
  }

  if (inventory + removeBlock < addBlock) {
    // 인벤토리에서 꺼낸 블록 수와 인벤토리에 넣은 블록 수가
    // 채워야할 블록 수보다 적은 경우 더이상 진행 불가
    break
  }
  const totalTime = removeBlock * 2 + addBlock

  // 최소 시간인 답이 여러 개 있다면 그중에서 땅의 높이가 가장 높은 것
  if (answerTime >= totalTime) {
    answerTime = totalTime
    answerHeight = Math.max(answerHeight, height)
  }
}
console.log(answerTime, answerHeight)

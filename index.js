const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

// if inputs are numbers then parse it to int
// otherwise remove the map
rl.on('line', (line) => {
  input.push(line.split(' ').map((x) => parseInt(x)));
});

//////////////////////////////////////////////////////////////////////////////////////////

function solution(input) {
  return input;
}

//////////////////////////////////////////////////////////////////////////////////////////

rl.on('close', () => {
  console.log(solution(input));
});

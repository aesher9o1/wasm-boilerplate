const chalk = require("chalk");
const len2dArray = 6000;

const demoArray1D = new Array();
for (let i = 0; i < 440000; i++) demoArray1D[i] = i;

const demoArrayOfNumber = new Array(new Array());
for (let i = 0; i < len2dArray; i++) {
  demoArrayOfNumber[i] = [];
  for (let j = 0; j < len2dArray; j++) demoArrayOfNumber[i].push(j);
}
function printTimeTaken(startTime, endTime, result, title, mode) {
  console.log(
    mode ? chalk.greenBright(mode) : chalk.yellow("JAVASCRIPT"),
    title + " took ",
    chalk.bold.blue(endTime - startTime),
    " milliseconds to produce:",
    +Number(result)
  );
}

module.exports = {
  demoArrayOfNumber,
  printTimeTaken,
  demoArray1D,
};

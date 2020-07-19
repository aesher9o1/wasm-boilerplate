const length1d = 440000;
const length2d = 6000;
const length3d = 3000;

function sumOfArr(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) result += arr[i];

  return result;
}

function malloc1darr() {
  let result = [];
  for (let i = 0; i < length1d; i++) result.push(i);
}

function loopTime1DArr() {
  let sum = 0;
  for (let i = 0; i < length1d; i++) {
    sum += i;
  }
}

function sumOfN2Array(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      result += arr[i][j];
    }
  }

  return result;
}

function malloc2darr() {
  const demoArrayOfNumber = new Array(new Array());
  for (let i = 0; i < length2d; i++) {
    demoArrayOfNumber[i] = [];
    for (let j = 0; j < length2d; j++) demoArrayOfNumber[i].push(j);
  }
}

function loopTime2DArr() {
  let sum = 0;
  for (let i = 0; i < length2d; i++) {
    for (let j = 0; j < length2d; j++) sum += j;
  }
}

function generateArray() {
  let sum = 0;
  for (let i = 0; i < length3d; i++) {
    for (let j = 0; j < length3d; j++) {
      for (let k = 0; k < length3d; k++) {
        sum += k;
      }
    }
  }

  return sum;
}

module.exports = {
  sumOfArr,
  sumOfN2Array,
  generateArray,
  malloc1darr,
  loopTime1DArr,
  malloc2darr,
  loopTime2DArr,
};

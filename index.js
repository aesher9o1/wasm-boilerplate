const wasmInstance = require("./pkg");
const { demoArray1D, demoArrayOfNumber, printTimeTaken } = require("./data");
const {
  sumOfArr,
  loopTime1DArr,
  malloc1darr,
  loopTime2DArr,
  sumOfN2Array,
  malloc2darr,
  generateArray,
} = require("./logic");
let start, end, result;
const wasm = "WASM";

//increase heap size
//export NODE_OPTIONS=--max_old_space_size=8192

/**Test 1 O(N) Loop Start
 * Problem: Sum of 20,000 elements of an array
 */
//WASM Loop Time
start = new Date().getTime();
result = wasmInstance.loop_time_1d_arr();
end = new Date().getTime();

printTimeTaken(start, end, result, "O(N) Loop Time", wasm);

//Javascript Loop Time
start = new Date().getTime();
result = loopTime1DArr();
end = new Date().getTime();

printTimeTaken(start, end, result, "O(N) Loop Time");

//WASM
start = new Date().getTime();
result = wasmInstance.sum_of_arr(demoArray1D);
end = new Date().getTime();

printTimeTaken(start, end, result, "O(N) Loop Sum of Array", wasm);

//JAVASCRIPTs
start = new Date().getTime();
result = sumOfArr(demoArray1D);
end = new Date().getTime();

printTimeTaken(start, end, result, "O(N) Loop Sum of Array");

//WASM Malloc Time
start = new Date().getTime();
result = wasmInstance.malloc_1_d_arr();
end = new Date().getTime();

printTimeTaken(start, end, result, "O(N) Memory Allocation Time", wasm);

//Javascript Malloc Time
start = new Date().getTime();
result = malloc1darr();
end = new Date().getTime();

printTimeTaken(start, end, result, "O(N) Memory Allocation Time");

/**Test 1 O(N) Loop End */

/**Test 2 O(2) Loop Start
 * Problem: Sum of 20,000* 20,000 elements of an array
 */

//WASM Loop Time
start = new Date().getTime();
result = wasmInstance.loop_time_2d_arr();
end = new Date().getTime();

printTimeTaken(start, end, result, "O(N2) Loop Time", wasm);

//Javascript Loop Time
start = new Date().getTime();
result = loopTime2DArr();
end = new Date().getTime();

printTimeTaken(start, end, result, "O(N2) Loop Time");

//WASM
start = new Date().getTime();
result = wasmInstance.sum_of_n2_arr(demoArrayOfNumber);
end = new Date().getTime();

printTimeTaken(start, end, result, "O(N2) Loop Sum of Array", wasm);

//JAVASCRIPTs
start = new Date().getTime();
result = sumOfN2Array(demoArrayOfNumber);
end = new Date().getTime();

printTimeTaken(start, end, result, "O(N2) Loop Sum of Array");

//WASM Malloc Time
start = new Date().getTime();
result = wasmInstance.malloc_2_d_arr();
end = new Date().getTime();

printTimeTaken(start, end, result, "O(N2) Memory Allocation Time", wasm);

//Javascript Malloc Time
start = new Date().getTime();
result = malloc2darr();
end = new Date().getTime();

printTimeTaken(start, end, result, "O(N2) Memory Allocation Time");

/**Test 2 O(2) End
 */

/**
 * Memory allocation stresstest
 */

start = new Date().getTime();
result = wasmInstance.generate_arr();
end = new Date().getTime();

printTimeTaken(start, end, result, "Memory Allocation", wasm);

start = new Date().getTime();
result = generateArray();
end = new Date().getTime();

printTimeTaken(start, end, result, "Memory Allocation");

/**
 * Memory allocation stresstest
 */

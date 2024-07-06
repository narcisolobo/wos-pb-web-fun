// Array.map method

const numsArr = [1, 2, 3];

const doubledNumsArr = numsArr.map((num) => num + num);
const doubledNumsArr2 = numsArr.map(doubler);

console.log(doubledNumsArr);

function doubler(num) {
  return num + num;
}

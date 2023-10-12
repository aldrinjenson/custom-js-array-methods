const initialArray = [1, 2, 3, 4, 5];
const INITIAL_VALUE = 0;

const reducerFunc = (accumulator, currentVal) => {
  return accumulator + currentVal;
};

let reducedSum = initialArray.reduce(reducerFunc, INITIAL_VALUE);
console.log("Reduced Sum = ", reducedSum);

const customReducer = (array, reducerFunc, initialValue) => {
  let result = initialValue;
  for (const el of array) {
    result = reducerFunc(result, el);
  }
  return result;
};

reducedSum = customReducer(initialArray, reducerFunc, INITIAL_VALUE);
console.log("Custom Reduced Sum = ", reducedSum);

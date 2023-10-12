const initialArray = [1, 2, 3, 4, 5, 6];

const isEvenFilterFunc = (element) => {
  return element % 2 == 0;
};

const defaultFiltered = initialArray.filter(isEvenFilterFunc);
console.log(defaultFiltered);

// custom implementation

const customFilterer = (array, cb) => {
  const filtered = [];
  for (const el of array) if (cb(el)) filtered.push(el);
  return filtered;
};
const evenNumbers = customFilterer(initialArray, isEvenFilterFunc);
console.log(evenNumbers);

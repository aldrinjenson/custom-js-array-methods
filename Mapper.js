const initialArray = [1, 2, 3, 4, 5];

const multiplierBy2 = (element) => {
  return element * 2;
};
// default behaviour:
const newArr = initialArray.map(multiplierBy2);
console.log(initialArray);
console.log(newArr);

// custom Mapper
const mapper = (arr, cb) => {
  const updatedArr = [];
  for (const el of arr) {
    updatedArr.push(cb(el));
  }
  return updatedArr;
};

const newArray = mapper(initialArray, multiplierBy2);
console.log(newArr);

let ar = [1, 3, 4];

Array.prototype.b = () => {
  console.log("hello");
};

ar.b();

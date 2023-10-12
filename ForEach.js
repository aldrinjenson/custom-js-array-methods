const initialArray = [1, 2, 3, 4, 5, 6];

console.log("Default forEach");

initialArray.forEach((el) => {
  console.log(el);
});

const customForEach = (array, cb) => {
  console.log("inside custom For each");

  for (const el of array) {
    cb(el);
  }
};

customForEach(initialArray, console.log);

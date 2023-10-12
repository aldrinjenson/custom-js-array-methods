class ArrayFactory extends Array {
  constructor(valuesList) {
    super(...valuesList);
  }

  Length() {
    console.log("Calucalting length of array");
    return this.length;
  }

  Map(cb) {
    console.log("Doing custom Mapping");
    const result = [];
    for (const el of this) {
      result.push(cb(el));
    }
    return result;
  }

  Filter(cb) {
    console.log("Doing custom Filter");
    const result = [];
    for (const el of this) {
      if (cb(el)) result.push(el);
    }
    return result;
  }

  ForEach(cb) {
    console.log("Doing custom ForEach");
    for (const el of this) {
      cb(el);
    }
  }

  Reduce(cb, initialValue) {
    console.log("Doing Custom Reduce");
    let result = initialValue;
    for (const el of this) {
      result = cb(result, el);
    }
    return result;
  }
}

const arr = new ArrayFactory([1, 2, 3, 4, 5]);

console.log("Custom Array Length  = ", arr.Length());

const mappedResult = arr.Map((el) => el * 2);
console.log("Custom Mapped Result = ", mappedResult);

const filteredNums = arr.Filter((el) => el % 2 != 0);
console.log("Custom Filtered Result = ", filteredNums);

const reducedSum = arr.Reduce((acc, cur) => acc + cur, 0);
console.log("Custom Reduced Result = ", reducedSum);

arr.ForEach((el) => console.log(el));

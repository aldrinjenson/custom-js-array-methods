const initialArray = [1, 2, 3, 4, 5];

const isEvenFilterFunc = (element) => {
  return element % 2 == 0;
};

const defaultFiltered = initialArray.filter(isEvenFilterFunc);

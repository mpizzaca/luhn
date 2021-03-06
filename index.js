const digitAtIndex = (number, index) => {
  return Math.floor(number / Math.pow(10, index) % 10);
};

const numOfDigits = number => {
  return Math.ceil(Math.log10(number + 1));
}

const check = number => {
  let testNumber = 0;
  for (let i = 0; i <= numOfDigits(number); i++) {
    if (i % 2 === 0) {
      testNumber += digitAtIndex(number, i);
    } else {
      if (digitAtIndex(number, i) * 2 > 9) {
        testNumber += digitAtIndex(number, i) * 2 - 9;
      } else {
        testNumber += digitAtIndex(number, i) * 2;
      }
    }
  }
  return testNumber % 10 === 0;
};

module.exports = check;
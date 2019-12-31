// Do not change any of the function names

function returnFirst(arr) {
  return arr[0];
}

function returnLast(arr) {
  return arr[arr.length - 1];
}

function getArrayLength(arr) {
  return arr.length;
}

function incrementByOne(arr) {
  // arr is an array of integers  
  // increase each integer by one
  // return the array
  return arr.map(el => el + 1);
}

function addItemToArray(arr, item) {
  // add the item to the end of the array
  arr.push(item);
  return arr;
}

function addItemToFront(arr, item) {
  // add the item to the front of the array
  // return the array
  // hint: use the array method .unshift
  arr.unshift(item);
  return arr;
}

function wordsToSentence(words) {
  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'
  return words.join(' ');
}

function contains(arr, item) {
  // check to see if item is inside of arr
  // return true if it is, otherwise return false
  return arr.includes(item);
}

function addNumbers(numbers) {
  // numbers is an array of integers.
  // add all of the integers and return the value
  return numbers.reduce((acc, cur) => acc + cur);
}

function averageTestScore(testScores) {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
  return addNumbers(testScores) / testScores.length;
}

function largestNumber(numbers) {
  // numbers is an array of integers
  // return the largest integer
  return numbers.reduce(function(largest, el) {
    if (el > largest)
      return el;

    return largest;
  });
}

function multiplyArguments(...numbers) {
  // use the arguments keyword to multiply all of the arguments together and return the product
  // if no arguments are passed in return 0
  // if one argument is passed in just return it
  if (numbers.length == 0)
    return 0;

  return numbers.reduce((prod, cur) => prod * cur);
}

// Do not modify code below this line.
// --------------------------------

module.exports = {
  returnFirst,
  returnLast,
  getArrayLength,
  incrementByOne,
  addItemToArray,
  addItemToFront,
  wordsToSentence,
  contains,
  addNumbers,
  averageTestScore,
  largestNumber,
  multiplyArguments,
};

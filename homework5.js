// Task 1. Given an array. Write a recursive function that removes the first
// element and returns the given array. (without using
// arr.unshift(),assign second element to first, third element to second...)

let arr = [6, 78,"n", 0, 1];
function recursionRemoveAssign(arr) {
  let newArr = [];
  if (arr.length === 0) {
    return arr;
  } else {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i + 1] !== undefined) {
        recursionRemoveAssign(newArr.push(arr[i + 1]));
      }
    }
  }
  return newArr;
}
console.log(recursionRemoveAssign(arr));

// Task 2. Given an array of nested arrays. Write a recursive function that
// flattens it. (Hint create function that concats arrays).

let arr = [1, [3, 4, [1, 2]], 10];
function flattArray(arr) {
  let flattenedArr = [];
  if (arr.length === 0) {
    return arr;
  }
  if (arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        flattenedArr = flattenedArr.concat(flattArray(arr[i]));
      } else {
        flattenedArr.push(arr[i]);
      }
    }
  }

  return flattenedArr;
}
console.log(flattArray(arr));

// Task 3. Given a number. Write a function that calculates its sum of the digits
// and if that sum has more than 1 digit find the sum of digits of that number.
// Repeat that process if needed and return the result.

let number = 29;
function sumOfDigits(number) {
  let stringNumber = number.toString();
  let sum = 0;
  let result = 0;
  if (number < 10) {
    return number;
  } else {
    for (let i = 0; i < stringNumber.length; i++) {
      sum += +stringNumber[i];
    }
    result = sumOfDigits(sum);
  }
  return result;
}
console.log(sumOfDigits(999999999999));

// Task 4. Given the list of the following readers: Output the books sorted by the percent in descending order which
// readStatus is true and add ‘%’ char in the end for percent value.

let readers = [
  { book: "Catcher in the Rye", readStatus: true, percent: 40 },
  { book: "Animal Farm", readStatus: true, percent: 20 },
  { book: "Solaris", readStatus: false, percent: 90 },
  { book: "The Fall", readStatus: true, percent: 50 },
  { book: "White Nights", readStatus: false, percent: 60 },
  { book: "After Dark", readStatus: true, percent: 70 }
];
function sortedBooks(readers){
let sortedReadersDecreaseOrder = readers.sort((a,b) => b.percent - a.percent);

let filteredReaders = sortedReadersDecreaseOrder.filter(reader => reader.readStatus);

let result = filteredReaders.map(reader => reader.book + ":" + reader.percent + "%" );
return result;
}
// ## question number 1

const string = "I Pushkar a full stack web developer";

const reversed = string.split(" ").map((elem) => {
  return elem.split("").reverse().join("");
});

const reversedString = reversed.join(" ");

// console.log(reversedString)

// ## question numbe 2

const obj = {};

function check(elem) {
  if (typeof elem !== "object") {
    return typeof elem;
  }

  return Array.isArray(elem) ? "array" : "object";
}

// check(obj)

// ## question number 3

const array = [1, 2, 3, 4, 5];

array.length = 0;

// console.log(array)

// ## question number 4

const arry2 = [1, 2, 3, 4, 5];

const duplicatedArray = arry2.concat(arry2);

// console.log(duplicatedArray);

//  ## ouestion number 5

let number = 12;

const reversedNumber = (num) => {
  let rev = 0;
  while (num > 0) {
    lastDigit = num % 10;
    rev = rev * 10 + lastDigit;
    num = Math.floor(num / 10);
  }
  return rev;
};

// console.log(reversedNumber(number));

// ## question number 6

const array3 = [10, 30, 20, 3, 5];

function secondLargestNumber(elem) {
  let firstLargestNumber = Math.max(...elem);
  const newArr = elem.filter((element) => element !== firstLargestNumber);

  let secondLargestNum = Math.max(...newArr);

  return secondLargestNum;
}

// console.log(secondLargestNumber(array3));

//  ## question number 7

const array4 = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

const removedDuplicates = new Set(array4);
const newArr = Array.from(removedDuplicates);

// console.log(newArr);

//  ## question number 8;

const array5 = [1, 2, 3, 4, 5];
const positions = 8;

const rotateArray = (arr) => {
  const length = arr.length;
  const positionedArr = arr.splice((positions % length) - 1, positions);
  return positionedArr.concat(arr);
};

// console.log(rotateArray(array5));

// ## question number 9

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 4, 3, 5, 5];

const arr1FrequencyTable = {};
const arr2FrequencyTable = {};

const arr1Length = arr1.length;
const arr2Length = arr2.length;

const checkPermutation = (obj1, obj2) => {
  arr1.forEach((element) => {
    obj1.hasOwnProperty(element)
      ? obj1[`${element}`]++
      : (obj1[`${element}`] = 1);
  });

  arr2.forEach((element) => {
    obj2.hasOwnProperty(element)
      ? obj2[`${element}`]++
      : (obj2[`${element}`] = 1);
  });

  const obj1JSON = JSON.stringify(obj1);
  const obj2JSON = JSON.stringify(obj2);

  if (arr1Length === arr2Length && obj1JSON === obj2JSON) {
    return "Arrays are permutated to each other";
  } else {
    return "Arrays are not permutated to each other";
  }
};

// console.log(checkPermutation(arr1FrequencyTable, arr2FrequencyTable));

// ## question number 10

const targetedSum = 10;
const arr3 = [2, 4, 6, 3, 5, 5, 3];

const pairedArr = [];

arr3.forEach((elem, i) => {
  for (let index = 0; index < arr3.length; index++) {
    if (elem + arr3[index] === 10 && index !== i) {
      pairedArr.push([elem, arr3[index]]);
    }
  }
});

// console.log(pairedArr);

//  ## question number 11

const arr4 = [1, 2, 3, "4", 7, "8", 10];

let sum = 0;

arr4.forEach((elem) => {
  if (typeof elem === "number") {
    sum = sum + elem;
  }
});

// console.log(sum);

// ## question number 12

const obj2 = {
  name: "Pushkardeep",
  age: 18,
  interests: "Coding",
};

const obj3 = {
  name: "SomeOne",
  age: "Dont Know",
  interests: "who knows",
};

function getItem() {
  console.log(this);
}

// use of call 
getItem.call(obj2);

// use of bind 
const storedFunc = getItem.bind(obj3);
storedFunc();

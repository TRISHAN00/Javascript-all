// How to pring random number 1 to 6

const number = [1, 2, 3, 4, 5, 6];

const randomNumber = () => {
  return Math.floor(Math.random() * number.length);
};

// get random number between two value.
const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// How to show students names with follow ordering
const students = ["Tanvir", "Bishal", "Kushal", "Rajath", "Akash"];

const getSortName = (arr) => {
  return arr.sort();
};

// random number showcase in array
const numbers = [4, 1, 2, 3, 5, 7, 6];

numbers.sort((a, b) => a - b);

// find the vowel from any sentence
const vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

const countVowel = (sentence) => {
  let count = 0;
  const letters = Array.from(sentence);
  letters.forEach((letter) => (vowel.includes(letter) ? count++ : count));
  return count;
};

// find duplicate value from array
const duplicateNumbers = [10, 30, 10, 5, 6, 33, 44, 33, 6, 44]

const finalNumbers = duplicateNumbers.filter((value, index, array) => {
    return array.indexOf(value) !== index
})


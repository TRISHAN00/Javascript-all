// example find the vowel from an array

const vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

try {
  let count = 0; 
  const text = "Hello"; 
  const letters = Array.from(text);
  letters.forEach((letter) => (vowel.includes(letter) ? count++ : count));
  console.log(count);
} catch (err) {
  console.log(err);
}

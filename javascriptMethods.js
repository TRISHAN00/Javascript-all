// String Length
const name = "trisha"

// Javascript Object
const players = {
    name : 'trishan',
    age : 26,
    country : 'bangladesh',
    slice : function(start, end) {
        console.log('slice');
    },
    substring : function(start, end) {
        console.log('substring');
    },
    substr : function() {
        console.log('substr');
    }
}

// slice method
const fruits = "Apple, Banana, Kiwi";
// console.log(fruits.slice(-19, -14));
// const output = fruits.slice(7, 13)
// substring
// console.log(fruits.substring(15, 18));
// console.log(fruits.substr(7, 6));



// replace method replace method never change the main string and also replace the first match. Should you case sensitive.
const language = 'I love PHP'
// console.log(language);
const output = language.replace('PHP', 'JavaScript Must')
// console.log(output);


// converting to upper and lowercase
const str = 'to upper case';
const upperCase = str.toUpperCase()
// console.log(upperCase);

const lowerStr = 'TO LOWER CASE';
// console.log(lowerStr.toLowerCase());

// let a = 'Bangladesh';
// console.log(a);
// a = 'English'
// console.log(a);

// trim method
const fullName = 'Trishan     Saha';
const o = fullName.charAt(3)
// console.log(fullName.trim());

// charAt
const charCode = fullName.charCodeAt()
// console.log(charCode);

// make string to an array
const strSplit = 'Hello Bangladesh';
const resultSplit = strSplit.split(' ')
console.log(resultSplit);
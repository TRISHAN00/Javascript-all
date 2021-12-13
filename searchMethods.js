// indexOf search method
const str = "I love my country too much."
// console.log(str.indexOf('l'));

// lastIndexOf
const strLastIndexOf = "I am something telling something";
const resultLstIndexOf = strLastIndexOf.lastIndexOf('something', 13)

// console.log(strLastIndexOf.split(' '));

// search method
const searchMethod = "I am trying to searching to you.";
const searchResult = searchMethod.includes('searchings')

if( searchResult) {
    // return console.log('I have found');
}
else {
    // console.log('not found');
}

// const cars = ["Saab", "Volvo", "BMW"];
// let x = cars[1]

// console.log(x);


const cars = ["Volvo", "Jeep", "Mercedes"];
cars[0] = "Ford"
// console.log(cars);


// remove last item of fruit
const fruits = ["Banana", "Orange", "Apple", "Kiwi"];
fruits.splice(0, 2)
console.log(fruits);

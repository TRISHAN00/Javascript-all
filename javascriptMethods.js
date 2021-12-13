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



// replace method
const language = 'I love PHP'
const output = language.replace('PHP', 'JavaScript Must')
// console.log(output);
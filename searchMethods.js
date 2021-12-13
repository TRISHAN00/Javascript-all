// indexOf search method
const str = "I love my country too much."
// console.log(str.indexOf('l'));

// lastIndexOf
const strLastIndexOf = "I am something telling something";
const resultLstIndexOf = strLastIndexOf.lastIndexOf('something', 13)

// search method
const searchMethod = "I am trying to searching to you.";
const searchResult = searchMethod.includes('searchings')

if( searchResult) {
    return console.log('I have found');
}
else {
    console.log('not found');
}
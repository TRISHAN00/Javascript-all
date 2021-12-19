// // without regEx
// const text = "Visit Bangladesh";
// const findBangladesh = text.search("bangladesh");



// using regEx
const text = "Visit Bangladesh";

// const findBangladesh = text.search(/bangladesh/i); //without replace
const findBangladesh = text.replace(/bangladesh/i, "Australia"); //with replace


// console.log(findBangladesh);


// global match of regEx
const globalText = "Samsung powerd by samsung";
const globalResult = globalText.replace(/samsung/ig, "Itel")
console.log(globalResult);
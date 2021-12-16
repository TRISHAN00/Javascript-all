// forEach Functiona
const numbers = [45, 4, 9, 10, 7];

const newNumbers = numbers.map((value) => {
    return value * 2
})

// numbers.forEach((value, index, array) => {
//     console.log(value);
//     console.log(index);
//     console.log(array);
// })


// map functiona


// filter functiona
const filterNumber = [45, 4, 9, 10, 7];

const newFilter = filterNumber.filter((value) => {
    return value > 9;
})

console.log(newFilter);
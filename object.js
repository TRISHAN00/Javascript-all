const employers = {
    name : 'Adat',
    address : [
        {permentAdress : 'Baligora, Bangladesh', currentAddress : 'Dhaka, Bangladesh'}
    ],
    country : 'Bangladesh'
}

for(let x in employers) {
    // console.log(employers[x]);
}

// for in use with array Note : do not use for in over array
const numbers = [1, 45, 9, 10, 11]
for (let number in numbers) {
    // console.log(numbers[number]);
}

// for of
const a = 'Trishan';

for (const x of a) {
    console.log(x);
}
// Sort 
const players = ['Banana', 'Apple', 'Juice', 'Orange'];
const sort = players.sort()
const reverseSort = sort.reverse()

// sorting number
const number = [40, 100, 20, 30];
number.sort((a, b) => {
    return a - b
});

// sorting reverse
const numberReverse = [40, 100, 20, 30];
numberReverse.sort((a, b) => {
    return b - a
})

// randomly sort
const randomSort = [40, 100, 20, 30];
randomSort.sort((a, b) => {
    return 0.5 - Math.random();
});


// How to find last item of array
const players1 = ['Banana', 'Apple', 'Juice', 'Orange', "Kiwi"];


// sort of object
const brand = [
    {type : "Volvo", year : 1996},
    {type : "Hino", year : 1888},
    {type : "Arafa", year : 2000}
];

brand.sort((a, b) => {
    let x = a.type.toLowerCase();
    let y = b.type.toLowerCase()
    if (x < y) {return - 1}
    if( x > y) {return 1}
    return 0
})

brand.sort((a, b) => a.type - b.type)
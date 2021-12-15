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
console.log(players1[players1.length - 1]);
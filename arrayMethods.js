

// for (let i = 0; i < fruits.length; i++) {
//     const element = fruits[i];
//     const ul = document.getElementById('ul')
//     const li = document.createElement('li').textContent = element
   
//     ul.append(li)
// }
const fruits = ['Banana', 'Orange', 'Apple', 'Mango']



// fruits.forEach((item) => {
//     const ul = document.querySelector('#ul')
//     const li = document.createElement('li')
//     ul.append(li.textContent = item)
// })

const fruitsTwo = ['Banana', 'Orange', 'Apple', 'Mango']
const joinToString = fruitsTwo.join(' ')
console.log(joinToString);
console.log(joinToString.split(' '));
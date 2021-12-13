const fruits = ['Banana', 'Orange', 'Apple', 'Mango']

for (let i = 0; i < fruits.length; i++) {
    const element = fruits[i];
    const ul = document.getElementById('ul')
    const li = document.createElement('li').textContent = element
   
    ul.appendChild(li)
}

console.log('hello');
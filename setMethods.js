// add value in set 
const letters = new Set()

letters.add('a')
letters.add('b')
letters.add('c')

const a = 'd';
const b = 'e'

letters.add(a)
letters.add(b)





let textt = ''
letters.forEach((value) => {
    textt = textt + value
})

// when we don't want to put multiple name in the array we can use set method.

const names = new Set(['a', 'b', 'b', 'c', 'e'])
// resulult with console is : Set(4) { 'a', 'b', 'c', 'e' }

names.add('d')
names.delete('e')
// resulult with console is : Set(4) { 'a', 'b', 'c', 'd' } 


// I can use forEach functioan in set method.
names.forEach((value) => {
    // return console.log(value + ':');
})



// ----
const studentsNumber  = {
    first : 0,
    second : 1,
    third : 3
}


for (const i in studentsNumber) {
    console.log(i.value);
}










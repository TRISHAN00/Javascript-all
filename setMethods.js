// add value in set 
const letters = new Set()

letters.add('a')
letters.add('b')
letters.add('c')

const a = 'd';
const b = 'e'

letters.add(a)
letters.add(b)


console.log(letters);


let textt = ''
letters.forEach((value) => {
    textt = textt + value
})

console.log(textt);
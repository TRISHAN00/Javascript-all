// object is not iterable

const name = 'Bangladesh b';
for (const i of name) {
    if (i === 'B') {
        console.log('found' + i);
    }
    else {
        console.log('not found')
    }
}
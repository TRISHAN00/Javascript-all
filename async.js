// Javascript read line by line order they maintain sequentially. It's call synchronous way. By default JavaScript Synchronous.
function hello() {
    console.log('Line 2 Code');
}

console.log('Line 1 Code');

setTimeout(() => {
    hello();
}, 2000);


console.log('Line 3 Code');

// But, javaScript can maintain with asynchronous way.
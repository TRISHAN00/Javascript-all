function temporary() {
    let counter = 0;

    return function () {
        counter = counter + 1
    }

};

const add = temporary();
console.dir(add);
add()
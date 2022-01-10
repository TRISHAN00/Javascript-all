const taskStatus = false;

console.log("Task 1");

// Promise pattern
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(taskStatus) {
            resolve("Task 2")
        }
        else {
            reject("Failed!")
        }
    }, 2000);
});

console.log("Task 3");

// call promise
promise
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.log(error);
    })
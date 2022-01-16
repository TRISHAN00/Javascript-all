const taskComplete = false;

const promise = new Promise((resolved, reject) => {
  setTimeout(() => {
    if(taskComplete) {
      resolved("Task Completed True");
    } else {
      reject("Task Rejected")
    }
  }, 2000);
})

promise
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  })
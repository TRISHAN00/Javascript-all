function temporary() {
  let count = 0;

  return function () {
    count = count + 1;
    console.log(count);
  };
  return count;
}

temporary();
console.log(count);

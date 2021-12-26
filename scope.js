const x = true
if (x === true) {
    console.log(`value is ${x}`); throw "If x is not true"
} else {
    console.log(`value is not ${x}`); throw "If x is not true"
}
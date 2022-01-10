// call function according to order
// const mySecondFunc = () => {
//     return console.log('second func');
// }

// const myFristFunc = () => {
//     // return console.log('fistFunchtion');
// }


// // myFristFunc()
// // mySecondFunc()

// // make function to follow sequence and these are the best practice.
// const myCalculator = (a, b) => {
//     return sum = a + b
// }

// const displayCalculator = (result) => {
//     // console.log(result);
// }

// const result = myCalculator(5, 1)
// displayCalculator(result)


// // another way of sequentially
// const display = (result) => {
//     // console.log(result);
// }

// const calculator = (a, b) => {
//     let sum = a + b
//     return display(sum)
// }

// calculator(5, 1)

// // but, there is a problem that they are dependent each other and do not have freedom.

// const displayAvr = (some) => {
//     console.log(some);
// }

// const calculateAvr = (a, b, c, callback) => {
//     let avr = a + b + c
//     if (callback) callback(avr)
//     return avr
// }

// const result = calculateAvr(1, 2, 3, displayAvr);
// console.log(result);


// callback with payment system.
const paymentSuccess = true;
const marks = 80;

const enroll = (callback) => {
    console.log('Course enrollment is in progress.');

    setTimeout(() => {
        if(paymentSuccess) {
            callback();
        } else {
            console.log('Payment failed!');
        }
    }, 2000);

}

const progress = (callback) => {
    console.log('Course on progress..');

    setTimeout(() => {
        if(marks >= 80) {
            callback();
        } else {
            console.log("Your could not get enough marks to get the certificate.");
        }
    }, 3000);

}

const getCertificate = () => {
    console.log("Preparing your certificate.");

    setTimeout(() => {
        console.log("Congrats you got the certificate.");
    }, 1000);
}

enroll()

progress()

getCertificate()
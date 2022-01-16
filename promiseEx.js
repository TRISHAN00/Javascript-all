const paymentSuccess = true;
const marks = 80;

const enroll = () => {
    console.log('Course enrollment is in progress.');

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if(paymentSuccess) {
                resolve();
            } else {
                reject('Payment failed!');
            }
        }, 2000);
    });

    return promise;
}

const progress = () => {
    console.log('Course on progress..');

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if(marks >= 80) {
                resolve();
            } else {
                reject("Your could not get enough marks to get the certificate.");
            }
        }, 3000);
    })
    return promise;
}

const getCertificate = () => {
    console.log("Preparing your certificate.");

    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Congrats you got the certificate.");
        }, 1000);
    }) 
    return promise;
}

enroll()
    .then(progress)
    .then(getCertificate)
    .then((value) => {
        console.log(value);
    })
    .catch((err) => {
        console.log(err);
    })
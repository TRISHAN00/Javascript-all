// getter
// const person = {
//     firstName : 'Trishan',
//     lastName : 'Saha',
//     language : 'en',
//     get fullName() {
//         return this.firstName + ' ' + this.lastName;
//     }
// };

// console.log(person.fullName);


// const person = {
//     firstName : 'Trishan',
//     lastName : 'Saha',
//     language : '',
//     set lang(lang) {
//         this.language = lang;
//     }
// };

const person = {
    firstName : 'Trishan',
    lastName : 'Saha',
    language : '',
};

Object.defineProperty(person, 'fullName', {
    get : function () {
        return this.firstName + ' ' + this.lastName
    }
}) 

console.log(person);
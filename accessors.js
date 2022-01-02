// getter
const person = {
    firstName : 'Trishan',
    lastName : 'Saha',
    language : 'en',
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
};

console.log(person.fullName);
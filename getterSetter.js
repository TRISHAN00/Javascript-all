const person = {
    firstName : 'Trishan',
    lastName : 'Saha',
    country : '',
    language : '',
    get fullName() {
        return this.firstName + ' ' + this.lastName
    }
}
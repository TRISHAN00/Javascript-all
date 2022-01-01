const person = {
    firstName : 'Trishan',
    lastName : 'Saha',
    country : '',
    language : '',
    set bang(cont) {
        this.country = cont;
    }
}

person.bang = 'Bangladesh'

console.log(person);
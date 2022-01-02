function Person(firstName, lastName, age, country) {
    this.firstName = firstName,
    this.lastName = lastName,
    this.age = age,
    this.country = country,
    this.fullName = function () {
        return this.firstName + ' ' + this.lastName
    }
}

const rahim = new Person('Rahim', 'Sah', 35, 'Bangladesh');
console.log(rahim.fullName());
function Person(firstName, lastName, age, country) {
    this.firstName = firstName,
    this.lastName = lastName,
    this.age = age,
    this.country = country,
    this.fullName = function () {
        return this.firstName + ' ' + this.lastName
    }
};

Person.prototype.position = "Analyst";

const sumit = new Person("Sumit", "Saha", 35, "Bangladesh");
console.log(sumit.position);
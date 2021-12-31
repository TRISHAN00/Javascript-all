class Car {
    constructor(name, year, owner) {
        this.name = name,
        this.year = year,
        this.owner = owner
    }

    branOwner() {
        console.log(`Brand name is ${this.name} and owner name is ${this.owner}`);
    }
}

const tata = new Car("TATA", 2017, 'Ratan TATA')

const tesla = new Car("Tesla", 2020, 'Alen Mask')

tata.branOwner()
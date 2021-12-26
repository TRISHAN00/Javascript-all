const person = {
    firstName : "Oushi",
    lastName : "Saha",
    totalSub : {
        bangla : 75,
        english : 85,
        math : 65, 
        science : 85
    },

    fullName : function () {
        return this.firstName + " " + this.lastName
    },

    totalMarks : function () {
        let arrValue = Object.values(this.totalSub)
        
        const totalSum = arrValue.reduce((total, value) => {
            return total + value
        });

        return totalSum
    },

    fullDetailsOfStudents : function () {
        return `The name our student is ${this.fullName()} and her total marks is ${this.totalMarks()}.`
    }
}

console.log(person.fullDetailsOfStudents());
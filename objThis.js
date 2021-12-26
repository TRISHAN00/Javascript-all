const person = {
  firstName: "Mithod",
  lastName: "Saha",
  gender: "male",
  totalSub: {
    bangla: 75,
    english: 85,
    math: 65,
    science: 85,
    abc: 75,
  },

  fullName: function () {
    return this.firstName + " " + this.lastName;
  },

  genderSwitch : function () {
    return person.gender.value     
  },

  totalMarks: function () {
    let arrValue = Object.values(this.totalSub);

    const totalSum = arrValue.reduce((total, value) => {
      return total + value;
    });

    return totalSum;
  },

  fullDetailsOfStudents: function () {
    return `The name of our student is ${this.fullName()} and his total marks is ${this.totalMarks()}.`;
  },
};



console.log(person.fullDetailsOfStudents());

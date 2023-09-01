// 1. 
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.introduce = () => {
        console.log(`Hi my name is ${this.name}, i'm ${age} years old`);
    }
}

const person1 = new Person();

console.log(Person.prototype);
console.log(person1.__proto__);

// 2.
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log(`Hi my name is ${this.name}, i'm ${age} years old`);
    }
}

const student1 = new Student ();

console.log(Student.prototype);
console.log(student1.__proto__);
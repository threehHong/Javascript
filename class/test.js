// 1
/* class User {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`Hi my name is ${this.name}`);
  }
}

// let user1 = new User();

// console.log(user1) // 클래스 User 내부에 정의한 내용을 확인할 수 있다

let user1 = new User("Ryan");
console.log(user1.name);
user1.sayHello(); */

// 2
/* class Car {}

const myCar = new Car();

console.log(myCar); // Car {}

myCar.make = "BMW";

console.log(myCar.make); // BMW
*/

// 3. extends, super()
/* class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}

// 클래스를 이용해 인스턴스 생성
const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);

person1.introduce(); // 출력: "Hi, I'm Alice and I'm 30 years old."
person2.introduce(); // 출력: "Hi, I'm Bob and I'm 25 years old."

class Child extends Person {
  constructor(name, age, hobby) {
    super(name, age); // 부모 클래스 constructor 함수 호출
    this.hobby = hobby;
  }

  introduce() {
    console.log(
      `Hi, I'm ${this.name} and I'm ${this.age} years old. My hobby is ${this.hobby}`
    );
  }
}

const child1 = new Child("Tom", 15, "playing soccer");
child1.introduce(); */

// 4. 생성자 함수
/* function Animal(name, species) {
  this.name = name;
  this.species = species;
  this.introduce = () => {
    console.log(`Hi my name is ${this.name}`);
  };
}

let panda = new Animal("Pubao", "Mammalia");

panda.introduce();
 */

// 5. 계산기(생성자 함수를 활용한 계산기).
function Calculator() {
  this.read = () => {
    this.value1 = Number(prompt("첫번쨰 숫자를 입력하세요"));
    this.value2 = Number(prompt("두번쨰 숫자를 입력하세요"));
  };
  this.sum = () => {
    return (sum = this.value1 + this.value2);
  };
  this.mul = () => {
    return (mul = this.value1 * this.value2);
  };
}
let calculator = new Calculator();
calculator.read();

console.log("Sum = " + calculator.sum());
console.log("Mul = " + calculator.mul());

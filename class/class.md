## class

### class의 정의

- 같은 키값을 가진 새로운 객체를 만들어 내는 원형틀 or 설계도 or 템플릿

<br>

### class 규칙

- class명의 첫 글자는 대문자로 표시한다.

- 클래스 선언문 이전에 사용 할 수 없다.

<br>

### class의 특징

- 선언한 클래스 자체에는 값이 담기지 않는다.

### instance

- 클래스를 통해 생성된 객체.

- 클래스에 선언된 키와 메소드를 그대로 가지고 있다.

- const 인스턴스명 = new 정의한 클래스명()의 형태로 instance를 생성한다.

<br>

### constructor

- class 내부에서 만들어지고 인스턴스의 속성을 정의하는 메소드.

- 인스턴스 생성시 인자로 전달받은 값을 내부에 정의된 속성의 값으로 할당하고 이 속성과 값들로 인스턴스가 만들어진다.

- 인스턴스를 생성하고 클래스 필드를 초기화 한다. <br>
  클래스 필드 : 생성자 함수에서 this로 연결된 속성.

- class는 construcor 메소드를 하나씩만 가질 수 있다.

- constructor는 생략할 수 있다.
  construcor() {}와 동일하게 동작한다.
  이 경우 인스턴스에 속성을 추가하려면 인스턴스를 생성한 후에 동적으로 추가해야 한다.

```javascript
class Car {}

const myCar = new Car();

console.log(myCar); // Car {}

myCar.make = "BMW";

console.log(myCar.make); // BMW
```

<br>

### class 설명을 위한 예시 코드

```javascript
class User {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log(`Hi my name is ${this.name}`);
  }
}

/* let user1 = new User();
console.log(user1) // 클래스 User 내부에 정의한 내용을 확인할 수 있다 */

let user1 = new User("Ryan");
console.log(user1.name);
user1.sayHello();

new User()로 호출을 하면 User 내부에서 정의한 메소드가 들어있는 객체가 생성된다.
```

<br>

### extends, super()

- extends와 super()함수를 사용하여 부모 class에 사용된 생성자 함수를 가져와 사용할 수 있다.

```javascript
class Person {
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
child1.introduce();
```

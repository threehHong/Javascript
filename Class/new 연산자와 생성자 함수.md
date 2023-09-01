## new 연산자와 생성자 함수(constructor function)

### 생성자 함수의 정의

- 같은 속성을 지닌 객체를 만들어내는 함수. <br>
  (유사한 객체를 여러개 만들때 사용한다).

<br>

### 생성자 함수 작성 및 호출 규칙

- 함수 이름의 첫 글자는 대문자로 시작한다.

- new 연산자를 함수명 앞에 붙여 호출한다.

<br>

### Instance

- 생성자 함수로 만들어진 객체.

<br>

### 생성자 함수 예시

```
function User(name) {
    this.name = name;
    this.isAdmin = false;
}

let user = new User("보라");

console.log(user.name); // 보라
console.log(user); // User {name: '보라', isAdmin: false}
```

<br>

### 생성자 함수 동작 원리

new User()를 써서 함수를 실행하면 아래와 같은 알고리즘이 동작한다.

```
function User(name) {
  // 1. this = {};  (빈 객체가 암시적으로 만들어짐)

  // 2. 새로운 프로퍼티와 변수를 this에 추가한다
  this.name = name;
  this.isAdmin = false;

  // 3. return this;  (this가 암시적으로 반환됨)
}
```

let user = new User("보라");의 결과는 아래와 같다.

```
let user = {
    name: "보라",
    isAdmin: false
}
```

<br>

### 연습 문제

- 문제

```
아래와 같은 세 개의 메서드를 가진 생성자 함수, Calculator를 만들어보세요.
- read() – prompt 함수를 이용해 사용자로부터 값 두 개를 받고, - 이를 객체 프로퍼티에 저장합니다.
- sum() – 프로퍼티에 저장된 값 두 개를 더한 후 반환합니다.
  mul() – 프로퍼티에 저장된 값 두 개를 곱한 후 반환합니다.

예시
let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
```

- 정답

```
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
```

<br>

### 참고 자료

- https://ko.javascript.info/constructor-new

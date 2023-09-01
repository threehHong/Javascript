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

## 함수

- 정리하기.

<br>

### 고차 함수

- 함수를 인자로 전달받거나 함수를 결과로 반환하는 함수.

<br>

### 즉시 실행 함수(IIFE, Immediately-invoked function expression)

- 정의되자마자 즉시 실행되는 함수 또는 패턴

- (function() {...}) () 형태 <br>
  (function() {...})와 같이 익명 함수를 정의하고 ()를 사용하여 정의한 함수를 즉시 실행한다.

```javascript
// 일반 함수
(function () {
  var message = "Hello World";
  console.log(message);
})();

// 화살표 함수
(() => {
  console.log("arrow function");
})();
```

<br>

### 즉시 실행 함수의 사용 이유

- 변수 스코프 제한 <br>
  함수 내에서 정의된 변수가 해당 함수의 스코프에만 영향을 미칠 수 있다. 이로 인해 변수 이름 충동을 방지하여 코드의 안정성을 높이는데 도움이 된다.

- 초기화나 설정 코드 실행에 사용 <br>

- 모듈화, 클로저 등의 활용 등이 있다.

<br>

### arguments 객체

- 피호출 함수에 전달된 인자들이 배열 형태로 저장된 객체.

- 피호출 함수에 생략해도 호출시 입력한 인자가 전달되어 arguments 객체에 배열 형태로 저장된다.

- 일반 함수에서 arguments 사용 가능 <br>
  화살표 함수에서는 arguments 사용 불가

```javascript
// a, b, c를 생략해도 호출시 입력한 인자가 전달된다
function func(/* a, b, c */) {
  console.log(arguments[0]); // 1
  console.log(arguments[1]); // 2
  console.log(arguments[2]); // 3
}

func(1, 2, 3);

// 화살표 함수에서는 arguments 객체 사용 불가.
const func = (a, b, c) => {
  console.log(arguments[0]); // 1
  console.log(arguments[1]); // 2
  console.log(arguments[2]); // 3
};

func(1, 2, 3); // Uncaught ReferenceError: arguments is not defined
```

<br>

### 참고

- https://developer.mozilla.org/ko/docs/Glossary/IIFE

## Error Handling

### Error Handling의 정의

- 프로그램 실행 중에 발생하는 오류나 예외를 다루는 프로그래밍 기술.

<br>

### Error Handling의 효과

- 오류로 인한 프로그램의 강제 종료를 막을 수 있다. <br>
  따라서 에러 처리는 코드를 안정적으로 동작하게 만들 수 있다.

- 사용자 입장에서는 사용자 경헙을 향상시키고.

- 개발자 입장에서는 디버깅을 용이하게 만들어준다.

<br>

### Error Handling의 방법

- try, catch, finally(try, catch는 오직 런타임 에러에만 동작한다). <br>
  에러 처리 코드를 통해 에러 발생시 에러 처리 코드로 에러 처리 코드로 점프 <br>

  ```javascript
  try {
    // 실행할 코드(에러가 발생할 가능성이 있는 코드).
  } catch (error) {
    // try 코드 블록에서 에러가 발생하면 이 코드 블록이 실행된다.
    // error에는 try 코드 블록에서 발생한 Error 객체가 전달된다.
  } finally {
    // 에러 발생고 상관없이 반드시 한 번 실행된다.
  }
  ```

- throw <br>
  던지다

- if문, 단축 평가, 옵션널 체이닝 연산자를 통한 방법 <br>
  예외적인 상황 발생시 반환하는 값(null 또는 -1).

  <br>

### Error Handling 예시

```javascript
// 1.
console.log("Start");

foo(); // ReferenceError: foo is not defined

console.log("End"); // 에러에 의해 프로그램이 강제 종료되어 이 코드는 실행되지 않는다.

// 2.
console.log("Start");

try {
  foo();
} catch (error) {
  console.log(error); // ReferenceError: foo is not defined
}

console.log("End"); // 에러가 일어나도 프로그램이 강제 종료되지 않고 이 코드는 실행된다.
```

### 에러 객체

- 에러의 상세 내용을 담고 있는 객체
  에러가 발생하면 자바스크립트는 에러 상세의 상세 내용이 담긴 객체를 생성한다 <br>

- name - 에러 이름 <br>
  message - 에러의 상세 내용 <br>
  stack - 에러를 발생시킨 콜스택의 호출 정보를 나타내는 내용

<br>

### 추가 정리

- 에러 객체, throw(직접 에러를 만들어서 던지기)

## Callback

### 정의

- 함수의 인자로 전달되는 함수.

<br>

### 용도

- 비동기 처리를 위해 사용

- 동기 - 실행된 작업이 끝나야 다음 작업을 수행할 수 있는 방식. <br>
  비동기 - 실행된 작업이 끝나지 않아도 다음 작업을 수행할 수 있는 방식

<br>

### 단점

- 비동기 처리를 위해 콜백 패턴을 사용하면 처리 순서를 보장하기 위해 여러 개의 콜백 함수를 중첩(nesting)해야 해서 복잡도가 높아지는 콜백 헬(Callback Hell)이 발생하는 단점이 있다.

- 콜백 헬은 가독성이 떨어트리고 오류를 수정하기 어렵게 만든다. <br>

- 이러한 단점으로 인해 promise, async, await 개념이 나왔다 <br> (이를 통해 비동기 시점을 명확하게 나타낼 수 있다).

<br>

### 예시 코드

기본

```javascript
function first(parameter) {
  console.log("1. first 함수 실행");
  parameter();
}

function second() {
  console.log("2. second 함수 실행");
  console.log("Hello");
}

first(second);

// 출력
1. first 함수 실행
2. second 함수 실행
Hello
```

<br>

Callback Hell

```javascript
// 비동기 함수 1
function asyncFunction1(callback) {
  setTimeout(function () {
    console.log("첫 번째 비동기 함수 완료");
    callback();
  }, 1000);
  console.log("asyncFunction1");
}

// 비동기 함수 2
function asyncFunction2(callback) {
  setTimeout(function () {
    console.log("두 번째 비동기 함수 완료");
    callback();
  }, 1000);
  console.log("asyncFunction2");
}

// 비동기 함수 1 호출 후, 비동기 함수 2 호출, 그 후 비동기 함수 3 호출
asyncFunction1(function () {
  asyncFunction2(function () {
    console.log("모든 비동기 함수 완료");
  });
});

console.log("출력");
```

<br>

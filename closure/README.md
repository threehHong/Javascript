## Closure

### Closure 정의

- 어떤 함수에서 선언한 변수를 참조하는 내부 함수를 외부로 전달할 경우, 함수의 실행 컨텍스트가 종료된 후에도 해당 변수가 사라지지 않는 현상을 말한다.

- closure - 폐쇄

### 예시 코드

```javascript
// closure가 아닌 함수
function parent() {
  let x = 10;
  function child() {
    console.log(x);
  }
  child();
}

parent();

// closure인 함수
function parent() {
  let x = 10;
  return function child() {
    console.log(x);
  };
}

const x = parent();

x();
```

### 참고 자료

- 정재남. (2020). 코어 자바스크립트. 위키북스

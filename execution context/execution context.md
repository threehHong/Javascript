## execution context

- 자바스크립트에서 가장 중요한 핵심 개념 중 하나인 실행 컨텍스트를 정확히 이해하는 것은 자바스크립트 뿐만 아니라 개발자로서 실력 향상에 큰 도움이 된다고 한다.

### execution context의 정의

- 실행할 코드에 제공할 환경 정보들을 모아놓은 객체. <br>
  환경 정보 - 변수와 함수에 대한 정보.

### execution context의 내용

- 환경 정보 - 변수와 함수에 대한 정보.

### execution context에서 사용되는 용어

- 전역 실행 컨텍스트 <br>
  별도의 코드가 없어도 자바스크립트가 실행되면 자동으로 전역 컨텍스트가 활성화된다(Call Stack의 가장 처음에 위치한다).

```javascript
var a = 1;
function outer
```

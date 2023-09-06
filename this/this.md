## this

- 객체를 가리키는 키워드

<br>

### this의 특징

- this가 가리키는 대상은 함수를 호출할 때 결정된다 <br>

- this는 실행 컨텍스트가 생성될 떄 결정된다. <br>
  실행 컨텍스트는 함수를 호출할 때 생성된다.<br>
  바꿔 말하면 this는 함수를 호출할 때 결정된다.

<br>

### 상황별 this가 가리키는 대상

- 전역 공간에서의 this <br>
  전역 공간에서 this는 전역 객체인 window를 가리킨다.

  브라우저에서 전역 객체 - window <br>
  Node.js에서 전역 객체 - global

```javascript
console.log(this); // Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}

console.log(this === window); // true
```

<br>

### 함수와 메소드 구별 방법

- 메서드 - 객체의 프로퍼티로 할당된 함수 <br>
  참고로 어떤 함수를 객체의 프로퍼티로 할당한다고 해서 메서드가 되지 않는 경우가 있다 따라서 <br>

- 함수로 호출한 경우인지, 메서드로 호출한 경우인지를 통해 함수와 메소드를 구별한다(함수 앞에 점이 있는 지의 여부로 파악).

- 함수는 그 자체로 독립적인 기능을 수행한다. <br>
  메서드는 자신을 포함하는 객체에 관한 동작을 수행한다

<br>

### 전역 객체와 전역 변수

- 전역 변수를 선언하면 자바스크립트 엔진은 이를 전역 객체의 프로퍼티로 할당한다. <br>
  즉 변수이면서 객체의 프로퍼티이기도 하다는 말이다.

- 이렇게 동작되는 원리는 **자바스크립트의 모든 변수는 특정 객체의 프로퍼티**로서 동작하기 때문. <br>
  여기서 특정 객체는 실행 컨텍스트를 말한다.

```javascript
var a = 1;
console.log(a); // 1
console.log(window.a); // 1
console.log(this.a); // 1
```

<br>

### 참고 자료

- 정재남. (2020). 코어 자바스크립트. 위키북스

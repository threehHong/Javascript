## Property Attribute

### Property

- 객체의 속성

### Attribute

- element의 id나 class 같은 추가적인 정보를 나타내는 키워드.

```javascript
/* input 엘리먼트의 type과 value는 attribute이다. */
<input type="text" value="0">
```

<br>

### Property Attribute의 정의

- 프로퍼티의 상태를 나타내는 값(내부 슬롯 이라고도 한다).

- 프로퍼티의 상태를 나타내는 값 다음과 같다. <br>
  value(값) <br>
  writable(갱신 가능 여부) <br>
  enumerable(열거 가능 여부) <br>
  configurable(재정의 가능 여부) <br>
  [[Value]], [[Writable]], [[Enumerable]], [[Configurable]]

- 자바스크립트 엔진은 property를 생성할 떄 property의 상태를 나타내는 property attribute를 기본값으로 자동 정의한다.

<br>

### Property Attribute 확인하기 - Object.getOwnPropertyDescriptor

- property attribute에 직접 접근할 수 없지만 Object.getOwnPropertyDescriptor 메서드를 사용하여 간접적으로 확인할 수 있다.

```javascript
const person = {
  name: "Lee",
};

// Object.getOwnPropertyDescriptor는 property attribute 값들을 반환한다.
console.log(Object.getOwnPropertyDescriptor(person, "name"));
// {value: 'Lee', writable: true, enumerable: true, configurable: true}
```

<br>

### Property의 종류

- 프로퍼티는 데이터 프로퍼티와 접근자 프로퍼티로 구분할 수 있다.

- 데이터 프로퍼티(data property) <br>
  키와 값으로 구성된 일반적인 프로퍼티.

- 접근자 프로퍼티 <br>
  자체적으로 값을 갖지 않고 다른 데이터 프로퍼티의 값을 읽거나 저장할 떄 호출되는 접근자 함수로 구성된 프로퍼티.

## 기록

- p.222 참고해서 이어서 정리하기.

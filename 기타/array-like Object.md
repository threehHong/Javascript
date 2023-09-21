## array-like Object - 유사 배열 객체

### 유사 배열 객체

- 반복문을 사용할 수 있는 객체

<br>

### 유사 배열 객체의 조건

- 숫자 형태의 indexing이 가능해야 한다.

- length 프로퍼티가 있어야 한다.

```javascript
let arrayLikeObject = {
  0: "first",
  1: "second",
  2: "third",
  length: 3,
};

console.log(arrayLikeObject[0], arrayLikeObject.length); // first, 3
```

<br>

### 유사 배열 객체와 배열의 차이점

- 유사 배열 객체는 forEach, map, filter와 같은 메서드를 사용할 수 없다.

<br>

### 유사 배열 객체를 배열로 변환하는 방법

- Array.from(유사배열 객체)

```javascript
let arrayLikeObject = {
  0: "first",
  1: "second",
  2: "third",
  length: 3,
};

console.log(Array.from(arrayLikeObject));
```

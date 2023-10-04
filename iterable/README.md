## iterable

- 이터레이션 프로토콜 <br>
  순회 가능한 데이터 컬렉션(자료구조)을 만들기 위해 정의하고 약속한 규칙.

- 이터레이션 프로토콜에는 이터레이터 프로토콜이 있다. <br> <br>
  이터레이션 프로토콜 iterlation protocol
  - 이터러블 프로토콜 iterable protocol
  - 이터레이터 프로토콜 iterator protocol

<br>

## iterable

- iterable <br>
  순회 가능한 or 반복 가능한

- iterable <br>
  이터러블 프로토콜을 준수한 객체 <br>
  Symbol.iterator를 프로퍼티 키로 사용한 메서드를 직접 구현한 객체 <br>
  Symbol.iteratordmf 프로토타입 체인을 통해 상속받은 객체 <br>

**iterable 확인 방법**

- 대상.proto에 Symbol.iterator: value()가 있으면 이터러블 프로토콜을 준수하는 것이고 이는 곳 순회 가능한 객체를 의미한다.

**iterable 준수하면**

- for of 문, 스프레드 연산자, 배열 디스트럭처링 가능.
  - for of 문으로 순회할 수 있고, 스프레드 문법과 배열 디스트럭처링 할당의 대상으로 사용할 수 있다.

<br>

## iterator

<br>

### 정리할 내용

- p.616 이어서.

- 순회 원리 <br>
  내부적으로 itelator.next()가 작동.

### Reference

- 이웅모. (2020). 모던 자바스크립트 Deep Dive. 위키북스.

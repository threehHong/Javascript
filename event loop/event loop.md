## Event Loop

Event Loop는 자바스크립트의 동작 방식을 설명하는 개념이다

자바스크립트 코드는 입력된 순서에 따라 순차적으로 출력이되는데 어떤 함수는 순서에 맞지 않게 출력되는 경우를 볼 수 있다 보통 이런 경우는 비동기 함수 떄문인데 Event Loop를 통해 왜 이렇게 동작하는지 이해할 수 있다.

여기에는 Stack, Queue, Heap이라는 용어가 등장한다. 이 용어에 대해 간략하게 알고 있으면 Event Loop를 이해하는데 도움이 된다.

이벤트 루프에 나오는 각 용어들의 의미와 특징에 대해 알아보고 주어진 코드에 따라 출력되는 과정을 알아보자.

<br>

<img src="image/Event_Loop.png"/>

https://alok-verma6597.medium.com/event-loop-in-javascript-431003755cd4

<br>

## Event Loop에 나오는 용어 설명

### Heap

- Heap에는 동적으로 생성된 객체 데이터의 주소값(참조값)이 할당되는 영역이다.

<br>

### Call Stack

- 실행될 코드가 한줄 단위로 할당되고 실행되는 영역

- LIFO(Last In First Out) 구조로 되어 있다. <br>
  가장 마지막에 추가된 데이터가 가장 먼저 나가는 방식 or 구조. <br>

- 참고로 Call Stack의 최대 사이즈는 12만개라고 한다(Chrome 기준). <br>
  (Call Stack의 최대 사이즈를 초과할 경우 브라우저가 종료된다고 한다).

<br>

### Web API

- 비동기 처리 함수를 관리하는 영역 <br>
  (브라우저에서는 Web API로 설명되고 Node에서는 백그라운드로 설명된다).

- 비동기 처리가 이루어진다(함수 내용이 출력되지는 않는다).

- Web API에 있는 함수는 Callback Queue로 전달된다.

- 비동기 처리로 넘어오는 비동기 함수로는 setTimeout, Promise, async & await 등이 있다. <br>

  (참고로 Promise는 동기 함수이다 - pending, 그러나 .then을 만나면 비동기 함수로 바뀐다).

<br>

### Callback Queue

- Web API에서 전달 받은 함수들을 관리하는 영역.

- Web API에서 전달 받은 비동기 함수들의 순서를 정리하고 정리된 순서에 따라 비동기 함수들은 Event Loop를 통해 Call Stack에 전달된다.

- Queue라는 자료 구조로 이루어져 있다.

- Callback Queue는 Microtask Queue, Animation Frames, Task Queue(Event Queue)로 이루어져 있다. <br>

  (Callback Queue를 Task Queue 또는 Event Queue라고 설명하기도 하는데 엄밀히 말하면 Callback Queue안에 Task Queue(Event Queue)가 있는 것이라고 한다).

  <br>

- 비동기 함수 정리 우선 순위는 다음과 같다. <br>
  Microtask Queue > Animation Frames > Task Queue <br>

- 각각의 Callback Que에 할당되는 함수는 다음과 같다. <br>
  Microtask Queue - Promise. <br>
  Animation Frames - 애니메이션 처리 함수. <br>
  Task Queue - setTimeout.

<br>

### Event Loop

- Callback Queue에 할당된 함수를 우선 순위에 맞춰 Call Stack에 할당해주는 영역 <br>
  이때, Call Stack이 비어있는지 확인하고 비어있을 경우 함수를 Call Stack에 할당해준다.

<br>

## Event Loop 동작 과정 예시

EX1

```
const foo = () => console.log("First");
const bar = () => setTimeout(() => console.log("Second"), 500);
const baz = () => console.log("Third");

bar();
foo();
baz();
```

위의 코드들은 어떤 순서로 동작할까.
아래 그림을 통해 내부적으로 어떻게 동작하는지 확인해보자.

<img src="image/Event_Loop_ex_01.gif"/>

https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif

<br>

1. bar() 함수가 Call Stack에 할당된다. 이 함수는 비동기 함수이므로 Web API로 전달된다.

2. foo 함수가 Call Stack에 할당되고 함수의 내용인 First가 출력된다.

3. 0.5초 경과 후 bar 함수가 Microtask Queue로 전달된다(baz() 함수가 실행되어 Call Stack으로 전달되지 않는다).

   - 비동기로 넘어간 함수는 동기 함수가 Call Stack에서 전부 처리된 이후에 Event Loop를 통해 Call Stack으로 전달 된다.

   <br>

4. baz() 함수가 Call Stack에 할당되고 함수의 내용인 Third가 실행된다.

5. Callback Queue에 있던 foo() 함수가 Event Loop를 통해 Call Stack으로 전달된다.

6. foo 함수가 실행되고 Second가 실행된다.

- First, Third, Second 순으로 출력된다.

<br>

### EX2

```
const func1 = () => setTimeout(() => console.log("First Running"), 100);
const func2 = () => console.log("1");
const func3 = () => console.log("2");
const func4 = () => console.log("3");
const func5 = () => console.log("4");
const func6 = () => console.log("5");
const func7 = () => console.log("6");
const func8 = () => console.log("7");
const func9 = () => console.log("8");
const func10 = () => console.log("9");
const func11 = () => console.log("10");

func1();
func2();
func3();
func4();
func5();
func6();
func7();
func8();
func9();
func10();
func11();
```

위 코드를 실행해보면 1~10까지 순차적으로 출력되고 마지막에 First Runnung이 출력된다.

비동기로 넘어간 함수는 동기 함수가 Call Stack에서 전부 처리된 이후에 Event Loop를 통해 Call Stack으로 전달 되기 때문이다.

<br>

## 참고 자료

- https://alok-verma6597.medium.com/event-loop-in-javascript-431003755cd4

- https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif

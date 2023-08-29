## Event Loop

자바스크립트의 동작 원리에 대해 설명하는 개념

<br>

### Heap

- Memory Heap <br>
  메모리 할당이 일어나는 곳

- Heap <br>
  구조화 되지 않은 넓은 메모리 영역(객체, 함수들이 저장된다)

<br>

### Call Stack

- 실행될 코드가 한줄 단위로 할당되어 있는 영역

- LIFO(Last In First Out) 구조로 되어 있다. <br>
  가장 나중에 들어온 데이터가 가장 먼저 나가는 방식 or 구조. <br>
  후입선출 <br>

- anonymous가 가장 밑에 있다 <br>
  anonymous - 쓰여진 모든 코드, 익명.

- 참고로 Call Stack의 최대 사이즈는 12만개라고 한다(Chrome 기준). <br>
  Call Stack의 최대 사이즈를 초과할 경우 브라우저가 종료된다고 한다.

<br>

### Web API

- 비동기 처리를 담당하는 영역

- Web API에 있는 데이터는 Callback Queue로 전달된다.

- 비동기 처리로 넘어오는 비동기 함수로는 setTimeout, Promise, async & await 등이 있다. <br>

  (참고로 Promise는 동기 함수이다 그러나 .then을 만나면 비동기 함수로 바뀐다).

  <br>

- 브라우저에서는 Web API로 설명되고 Node에서는 백그라운드로 설명된다.

<br>

### Callback Queue

- 비동기 처리가 끝난 후 실행되어야 할 콜백 함수가 차례로 할당 되는 영역

- Queue라는 자료 구조로 이루어져 있다.

- Callback Queue는 Microtask Queue, Animation Frames, Task Queue(Event Queue)로 이루어져 있다. <br>

  (Callback Queue를 Task Queue 또는 Event Queue라고 설명하기도 하는데 엄밀히 말하면 Callback Queue안에 Task Queue(Event Queue)가 있는 것이라고 한다).

  <br>

- Microtask Queue > Animation Frames > Task Queue <br>
  Callback Queue 우선 순위

- Microtask Queue에 담기는 비동기 함수 <br>
  Promise

- Animation Frames에 담기는 함수 <br>
  애니메이션 처리 함수

- Task Queue에 담기는 비동기 함수 <br>
  setTimeout

<br>

### Event Loop

- Callback Queue에 할당된 함수를 우선 순위에 맞춰 Call Stack에 할당해주는 영역 <br>
  이때, Call Stack이 비어있는지 확인하고 비어있을 경우 함수를 Call Stack에 할당해준다.

### 들어가며

Event Loop는 자바스크립트의 동작 원리를 설명하는 개념이다.

<br>

여기에는 Call Stack, Callback Queue, Heap이라는 용어가 등장하는데 이 용어들을 어느정도 알고 있어야 Event Loop를 더 완전하게 이해할 수 있다. <br>

이 글에서는 일반적으로 사용되는 Stack, Queue, Heap에 대한 개념과 특징 그리고 자바스크립트에서 각 개념이 어떤 의미를 가지는지 알아보기로 한다.

<br>

## 자료구조(Data Structure)

<img src="image/Data_Structure_Map.png"/>

<br>

- 컴퓨터에서 쓰이는 데이터를 효율적으로 저장, 관리, 조작하는데 사용되는 이론.

<br> <br>

## Stack, Queue, Heap

- 자료구조에서 선형 구조에 속하는 개념 <br>
  (선형 구조 - 자료를 구성하는 원소들이 하나씩 일렬로 나열된 형태)

<br>

## Stack

<img src="image/Stack.png"/>

<br>

### Stack의 정의

- 한 쪽 끝에서만 자료를 넣거나 뺄 수 있는 형태의 선형 자료구조

<br>

### Stack의 특징

- 가장 마지막에 추가된 데이터가 가장 먼저 제거된다. <br>
  LIFO(Last In First Out) 구조라고 한다.

- push : 스택에 자료를 집어 넣는 것 <br>
  pop : 스택에서 자료 제거하고 반환하는 것

- Stack은 쌓아놓은 접시와 유사하다. <br>
  접시는 밑에 부터 차곡 차곡 쌓아 올려 보관하고 가장 위에 올린 접시부터 차례대로 사용한다.

<br>

### 자바스크립트에서 Stack의 의미

- 자바스크립트에서의 스택은 함수 호출과 관련된 실행 컨테스트를 관리하는데 사용된다.

- 함수가 호출될 떄마다 실행 컨텍스트가 스택에 하나씩 쌓이고 함수의 실행이 끝나면 컨텍스트가 하나씩 제거된다.

- 이렇게 스택은 함수의 실행 흐름을 관리한다. <br>
  (참고로 호출된 순서의 역으로 함수가 실행된다).

<br>

## Queue

<img src="image/Queue.png"/>

<br>

### Queue의 정의

- 데이터를 넣는 쪽과 빼는 쪽이 다른 형태의 선형 자료구조

<br>

### Queue의 특징

- 가장 먼저 추가된 데이터가 가장 먼저 제거되는 구조 <br>
  FIFO(First In First Out) 구조라고 한다. <br>
  선입선출

- Enqueue : 큐에 데이터를 추가하는 것. <br>
  Dequeue : 큐에 데이터를 제거하여 반환하는 것

- Queue는 버스 정류장 대기줄과 유사하다. <br>
  버스 대기줄에 먼저 선 사람이 가장 먼저 버스에 탈 수 있다.

<br>

### 자바스크립트에서 Queue의 의미

- JavaScript에서 Queue는 비동기 함수의 순서를 정리하는데 사용된다.

- Web API에서 전달 받은 비동기 함수들의 순서를 정리하고 정리된 순서에 따라 비동기 함수들은 Event Loop를 통해 Call Stack에 전달된다.

- 비동기 함수 정리 우선 순위는 다음과 같다. <br>
  Microtask Queue > Animation Frames > Task Queue <br>

- 각각의 Que에 할당되는 함수는 다음과 같다. <br>
  Microtask Queue - Promise. <br>
  Animation Frames - 애니메이션 처리 함수. <br>
  Task Queue - setTimeout.

<br>

## Heap

<img src="image/Heap.png"/>

<br>

### 정의

- 데이터를 특정 순서대로 정렬하고 관리하는 구조.

- 완전 이진 트리의 일종으로 우선 순위 큐를 위하여 만들어진 자료구조.

- 힙은 완전 이진 트리라는 형태의 트리 구조로 이루어져 있다. <br>
  (이진 트리 : 각각의 노드가 최대 두 개의 자식 노드를 가지는 트리 구조)

<br>

### 힙의 종류

힙은 크게 최대 힙(Max Heap)과 최소 힙(Min Heap)으로 구분된다.

- 최대 힙(Max Heap)
  - 부모 노드의 키 값이 자식 노드의 키 값보다 크거나 같은 완전 이진 트리.
  - Key(부모 노드) >= Key(자식 노드).

<br>

- 최소 힙(Min Heap)
  - 부모 노드의 키 값이 자식 노드의 키 값보다 작거나 같은 완전 이진 트리.
  - Key(부모 노드) <= Key(자식 노드).

<br>

## 힙의 특징

- 우선 순위가 높은 데이터가 제거되고 반환하는 구조.

- 힙을 사용하면 최대값과 최소값 조회, 데이터의 삽입, 삭제 등을 빠르게 수행할 수 있다.

<br>

### 자바스크립트에서 Heap의 의미

- Heap에는 동적으로 생성된 객체 데이터의 주소값(참조값)이 할당되는 영역이다.

- 여기서 더 이상 필요하지 않은 객체들은 가비지 컬렉터에 의해 감지되고 제거된다.
  (가비지 컬렉터 : 메모리에 할당된 데이터를 해제하는 청소부).

<br>

## 참고 자료

- Wikipedia
- https://www.geeksforgeeks.org/heap-data-structure/

/* 
arr.slice([begin[, end]])
- 배열의 일부를 잘라 리턴하는 메소드

- begin - 잘라낼 배열의 시작 index

- end - 잘라낼 배열의 종료 index.
  * end index는 배열에 포함되지 않는다.

- end가 생략되면 begin부터 배열의 끝까지 자라낸다.

- begin이나 end가 음수이면 배열의 끝에서부터 계산한다
  * 가장 우측부터 시작해서 왼쪽으로 숫자가 작아진다(-3, -2, -1).

* slice : 1. 자르다, 썰다. 2. 조각.
*/

const animals = ["ant", "bison", "camel", "duck", "elephant"];
/* 
 0,  1,  2,  3,  4 (begin이나 end가 양수일 경우 인덱스)
-5, -4, -3, -2, -1 (begin이나 end가 음수일 경우 인덱스) 
*/

console.log(animals.slice(2)); // ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4)); // ["camel", "duck"]

console.log(animals.slice(0, 2)); // ["ant", "bison"]

console.log(animals.slice(-4, -2)); // ["bison", "camel"]

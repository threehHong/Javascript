/* 
lexical scope(정적 스코프)
선언된 위치에서 부모자식 스코프 관계가 결정된다.
대부분의 언어에서 사용하는 스코프 방식

동적 스코프 
함수가 실행되는 위치를 기준으로 스코프가 결정된다.
옜날 언어에서 사용하던 스코프 방식
*/

// ex.1
let x = 100;

function f1() {
  console.log(x);
}

function f2() {
  let x = 1000;
  f1();
}

f2(); // 100

/* 
// ex.2
let x = 100;

function f1() {
  console.log(x);
}

function f2() {
  x = 1000;
  f1();
}

f2(); // 1000 
*/

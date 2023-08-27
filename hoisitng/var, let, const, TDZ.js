// 1. var
/*
- ES6 이전 문법
- 함수 스코프(선언된 변수는 해당 함수 내에서만 사용할 수 있다, 함수 스코프만 적용된다).
- 함수가 아닌 for문과 같은 블록 내부에서 정의된 변수를 외부에서 접근할 수 있다.
- 한번 선언된 변수를 다시 선언할 수 있다.
- var는 선언하기 전에 할당하여 사용할 수 있다(hoisting, undefined 할당).
- 중복 선언, 함수에서만 scope가 적용되는 문제로 인해 var를 사용하는 것을 권장하지 않는다. 
*/

// 변수는 hoisting되고 undefined가 할당된다.
console.log(a); // undefined
var a = 1;
console.log(a); // 1

// 함수 스코프 - 함수에서만 스코프가 적용된다.
var a = 10;
function number() {
    var a = 100;
}
number();
console.log(a); // 10

// for문 - i를 정의된 지역에서 벗어난 범위에서 사용할 수 있다. 
for(var i = 1; i < 5; i++) {
    console.log(i);
}
console.log(i); // 5

// 블록 내부에 정의된 변수를 외부에서 접근할 수 있다.
{
  var name = "Tom";
}
console.log(name); // Tom



// 2. let 
/* 
- ES6 이후 문법
- 블록 스코프(변수의 위치에 따라 지역 or 전역적으로 접근 가능).
- 한번 선언된 변수를 다시 선얼할 수 없다.
- let도 hoisting이 되지만 선언된 변수에 값이 할당되는 구문이 나오기 전까지는 사용할 수 없다(TDZ가 작동되기 때문).

* TDZ(Temporal Dead Zone)
  어떤 변수에 대한 선언문이 나오기 전까의 범위는 그 변수가 사용될 수 없는 zone이라는 의미.
*/

// let도 hoisting 되지만 var와 달리 TDZ가 적용되어 어떤 변수에 대한 선언문이 나오기 전까지는 해당 변수를 사용할 수 없다.
console.log(a); // Uncaught ReferenceError: a is not defined
let a = 1;
console.log(a);



// 3. const
/* 
- 블록 스코프(변수의 위치에 따라 지역 or 전역적으로 접근 가능).
선언과 동시에 반드시 값이 할당되어야 한다.
선언과 할당 이후에 값을 재할당 할 수 없다.
*/



// TDZ(Temporal Dead Zone)
/* 
어떤 변수에 대한 선언문이 나오기 전까의 범위는 그 변수가 사용될 수 없는 zone이라는 의미.
*/



// var, let, const 사용 규칙
/* 
기본적으로 const를 사용한다.
재할당이 필요한 경우에는 let을 사용한다
var는 사용하지 않는다.
*/
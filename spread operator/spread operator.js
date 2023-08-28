/* 
Spread Operator(전개 연산자)
- 배열이나 객체에서 값들을 펼쳐 반환하는 연산자
- 배열, 객체, 함수의 인자, 문자열에서 사용할 수 있다.
*/


// 배열(Array)
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];
const arrWrap = [...arr1, ...arr2, ...arr3];

console.log(arrWrap); // [1, 2, 3, 4, 5, 6, 7, 8, 



// 객체(Object)
let obj1= { name:"김철수", age: 38 };
let obj2 = { ...obj1 }
obj2.name = "김남일";

// 객체에 속성값 변경 - 변경을 원하는 값의 키와 변경할 값을 아래와 같이 입력한다.
let obj2 = { ...obj1, name: "안철수" };
console.log(obj2); // {name:안철수, age:38}

// 객체에 속성 추가 - 추가를 원하는 키와 값을 아래와 같이 입력한다.
let obj2 = { ...obj1, gender: "female" };
console.log(obj2); // {name:안철수, age:38, gender:female}



// 함수(Function)
const fruits = ["Apple", "Banana", "Mango"];
console.log(fruits); // ['Apple', 'Banana', 'Mango']
console.log(...fruits); // Apple Banana Mango

function toObject(a, b, c) {
  return {
    a: a,
    b: b,
    c: c,
  };
}
console.log(toObject(...fruits)); // {a: 'Apple', b: 'Banana', c: 'Mango'}



// 문자열(String)
const string = "Hello";
console.log([...string]); // ["H", "e", "l", "l", "o"]
console.log(...string) // H e l l o
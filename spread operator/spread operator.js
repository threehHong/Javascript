// 객체에서 스프레드 연산자 사용
let obj1= { name:"김철수", age: 38 };
let obj2 = { ...obj1 }
obj2.name = "김남일";


// 객체에 속성값 변경 
// 변경을 워하는 값의 키와 변경할 값을 아래와 같이 입력한다.
let obj2 = { ...obj1, name: "안철수" };
console.log(obj2); // {name:안철수, age:38}


// 객체에 속성 추가
// 추가를 원하는 키와 값을 아래와 같이 입력한다.
let obj2 = { ...obj1, gender: "female" };
console.log(obj2); // {name:안철수, age:38, gender:female}


// 문자열을 배열로 변환하는 경우
const string = "Hello";
console.log([...string]); // ["H", "e", "l", "l", "o"]
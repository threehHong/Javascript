/* 
1. join() 
배열의 모든 요소를 연결해 하나의 문자열로 만드는 메소드.
배열 -> 문자열

2. 사용 방법
arr.join(separator)
sparator은 구분자로 배열의 각 요소를 구분할 문자열을 지정할 수 있다
구분자를 생략하면 배열의 요소들이 쉽표로 구분된다. 
빈 문자열 즉 ""일 경우 모든 요소들 사이에 아무 문자도 없이 연결된다.
*/

const elements = ['Red', 'Green', 'Black'];

console.log(elements.join()); // Red,Red,Red - 배열을 콤마로 연결한 문자열 출력

console.log(elements.join('')); // RedRedRed - 배열을 한번에 연결한 문자열 출력

console.log(elements.join('-')); // Red-Red-Red - 배열을 -로 한번에 연결한 문자열 출력
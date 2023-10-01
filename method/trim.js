/* 
trim()
문자열 양 끝의 공백을 제거하는 함수 

trimStart()
문자열 시작 부분의 공백을 제거하는 함수

trimEnd()
문자열 긑 부분의 공백을 제거하는 함수

trim
(끝 부분을 잘라내거나 하여) 다듬다
*/

const greeting = "  Hello!  ";

console.log(greeting, greeting.length); // "  Hello!  "

console.log(greeting.trim(), greeting.trim().length); // "Hello!"

console.log(greeting.trimStart(), greeting.trimStart().length); // "Hello!  "

console.log(greeting.trimEnd(), greeting.trimEnd().length); // "  Hello!"

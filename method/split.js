/* 
1. split()
문자열을 지정한 구분자를 기준으로 분리하여 배열로 만드는 메소드.
문자열 -> 배열

2. string.split(separator, limit)
*/

const str = 'The quick brown fox jumps over the lazy dog.';

// 구분자가 ' '일 경우 단어를 기준으로 분리하여 배열로 변환.
const words = str.split(' ');
console.log(words[3]); // fox


// 구분자가 ''일 경우 문자를 기준으로 분리하여 배열로 변환.
const chars = str.split('');
console.log(chars[2]); // e


// 구분자가 아무것도 없을 경우 하나의 문자열로 결합한 배열로 변환
const strCopy = str.split();
console.log(strCopy); // ["The quick brown fox jumps over the lazy dog."]

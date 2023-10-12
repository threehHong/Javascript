/* 
replace("찾을 문자열", "변경할 문자열") 
입력한 문자열을 찾아 다른 문자열로 바꿔주는 메서드
찾을 문자열 1개만 치환한다(가장 앞에 있는 문자열 치환).
*/
const paragraph1 =
  "The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?";

console.log(paragraph1.replace("dog", "monkey"));
// The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?

/* 
replaceAll("찾을 문자열", "변경할 문자열")
입력한 문자열을 찾아 다른 문자열로 바꿔주는 메서드
찾을 문자열 전부 치환한다.
*/
const paragraph2 =
  "The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?";

console.log(paragraph2.replaceAll("dog", "monkey"));
// The quick brown fox jumps over the lazy monkey. If the monkey reacted, was it really lazy?

/* 
shift
배열의 첫 번째 요소를 제거하고, 제거된 요소를 반환하는 메소드

unshift
배열의 맨 앞쪽에 새로운 요소를 추가하고, 추가된 배열의 전체 길이를 반환하는 메소드
*/

// shift
const array = [1, 2, 3];

const firstElement = array.shift();

console.log(firstElement);
console.log(array);

// unshift
const array2 = [1, 2, 3];

console.log(array2.unshift(4, 5)); // 5
console.log(array2); // [4, 5, 1, 2, 3]

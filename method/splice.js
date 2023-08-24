/* 
arr.splice(start[, deleteCount[, item[, item2[, ...]]]])
- 원본 배열에 새로운 요소를 추가 or 기존 요소를 삭제 or 기존 요소를 삭제하고 새로운 배열을 반환하는 메소드 

- start - 배열의 변경을 시작할 index

- deleteCount(Optional) - 배열에서 제거할 요소의 수

- item - 배열에 추가할 요소
  * 생략할 경우 요소를 제거만 한다.

* splice : (두 끝을) 잇다, 붙이다
*/

let month = ["Jan", "March", "April", "June"];
// 배열 1번째 앞 요소 0개를 제거하고 Feb를 추가한다.
month.splice(1, 0, "Feb"); // ["Jan", "Feb", "March", "April", "June"];
console.log(month);

// 배열 4번째 앞 요소 1개를 제거하고 May를 추가한다.
month.splice(4, 1, "May"); // ["Jan", "Feb", "April", "June", "May"];
console.log(month);

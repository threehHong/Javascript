// 1. map
/*
- 주어진 배열을 가지고 새로운 배열을 생성하는 함수(조건문과 반목문을 통해 새로운 배열 생성).

- 콜백함수의 파라미터로 전달된 각 배열 요소를 정의한 로직을 거쳐 반환한 값으로 새로운 배열을 생성하는 함수.

- 배열.map((params1, params2) => { }) 에서 params1은 배열에서 각 항목의 item, params2는 각 배열의 순번.
*/
let array = ["월", "화", "수"];
mapResult = array.map((item) => item + "요일");
console.log(mapResult); // ['월요일', '화요일', '수요일']

// 이전에 정리한 내용
/* const numbers = [1, 3, 5, 7, 9];

// 콘솔 출력(for 반복문)
for(i = 0; i<numbers.length; i ++) {
    console.log(numbers[i] * 2);
}
// 콘솔 출력(map)
const listItems = numbers.map((number, idx) => {
    console.log(number * 2);
});

// 브라우저 출력(map)
document.querySelector('.output_map').innerHTML = numbers.map((number) => {
    return number * 2;
}); */

// 2. filter
/*
- 반환값이 true이면 해당 요소를 유지하고 false인 경우 해당 요소를 배열에서 제외시켜 새로운 배열을 생성한다

- 매개변수 => 매개변수 === 특정 변수 형태에서 매개변수 === 특정 변수는 return이 생략된 형태이다.
*/
filterResult = array.filter((item) => item === "월");
console.log(filterResult); // ['월요일']
/* 
    filterResult = array.filter((item) => 
        {if(item === "월") {
            return item;
        }}
    );
    if문과 return이 생략된 형태라고 생각하기
    // * 참고로 여기에 map을 넣을 경우 ["월", undefiend, undefiend])로 출력된다.
*/

// 이전에 정리한 내용
/* const arr = [3, 10, 20, 4, 5, 'string'];

const result = arr.filter((value) => {
    return value >= 10;

    // if(value >= 10) {
    //     console.log(value);
    //     return true; // 조건을 만족하는 요소를 반환하기 위해 true를 반환(함수 종료?)
    // }              
    // return false; // 조건을 만족하지 않는 요소를 걸러내기 위해 flase를 반환 
})

console.log(result);

document.querySelector('.output_filter').innerHTML = result; */

// 3. reduce
/* 
- 주어진 배열의 요소들의 합을 구해주는 함수.
- 배열의 각 요소에 대해 reducer 함수를 실행하고 최종 결과값을 반환한다.
- arr.reduce((accumulator, currentValue, index, array) => { }, initialValue).
    accumulator - 누적되는 값
    currentValue - 현재 배열의 요소
    index(생략 가능) - 현재 배열 요소의 index
    array(생략 가능) - reduce 함수를 호출한 배열
    initialValue(생략 가능) - callback 함수 최초 호출시 첫 번째 인수에 제공하는 값(accumulator에 제공하는 값), 제공하지 않으면 배열의 첫 번쨰 요소를 사용.
*/
const numbers2 = [1, 3, 19, 100];

const sum = numbers2.reduce((acc, cur, index, array) => {
  console.log(acc, cur, index, array);
  return acc + cur;
}, 10);

console.log(sum);

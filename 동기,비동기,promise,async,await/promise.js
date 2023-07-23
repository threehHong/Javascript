/*
Promise
1. 비동기적인 작업을 수행하는 함수의 반환값을 이르는 말(객체형태이다).
   ex. fetch('https://jsonplaceholder.typicode.com/posts')의 반환값은 promise 객체 데이터 이다.

2. 프로미스는 3가지 상태를 가질 수 있다. 대기(pending), 이행(resolved), 거부(rejeccted)

3. promise 객체에서 then과 catch를 사용할 수 있다(promise console로 확인해보기).

4. fetch 함수가 성공했을 때 then 실행 - then의 콜백 함수의 결과값을 첫번째 파라미터로 받고 그 값을 반환한다 반환한 결과 값은 객체 형태이다(resolved).
   fetch 함수가 실패했을 때 catch 실행(rejected).

5. response.json()는 promise를 반환한다 -> 반환한 promise에서 then의 콜백 함수의 결과값을 첫번째 파라미터로 전달받아 출력하면 json 데이터에서 자바스크립트의 데이터로 변환된 데이터를 확인할 수 있다.
 
* response.json(); - josn 데이터를 자바스크립트의 데이터 타입으로 변환해준다.
*/

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function(response) {
        // response.json().then(function(data){
        //     console.log(data);
        // }) // nested promise 방식
        return response.json();
    })
    .then(function(myJson) {
        console.log(myJson);
    }) // promise chaining 방식

/* const result = fetch('https://jsonplaceholder.typicode.com/posts');
console.log(result); */











// 함수 정의
/* function increaseAndPrint(n, callback) {
    setTimeout(() => {
        const increased = n + 1;

        console.log(increased);

        if (callback) {
            callback(increased);
        }
    }, 1000);
}

// 함수 호출
increaseAndPrint(0, n => {
    increaseAndPrint(n, n => {
        increaseAndPrint(n, n => {
            increaseAndPrint(n, n => {
                increaseAndPrint(n, n => {
                    console.log('끝!');
                });
            });
        });
    });
}); */

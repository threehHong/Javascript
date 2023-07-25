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
** pending - 보류, 다음조치를 기다리고 있는 상태
   resolved -  
   rejected - 거부하다, 거절하다.
*** 콜백 함수를 연속해서 사용할 때 가독성이 떨어지는 문제를 극복할 수 있다(콜백헬로 인한 가독성이 떨어지는 문제를 극복할 수 있다).

*/
/* 
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function(response) {
        // response.json().then(function(data){
        //     console.log(data);
        // }) // nested promise 방식
        return response.json();
    })
    .then(function(myJson) {
        console.log(myJson);
    }) // promise chaining 방식 */

/* const result = fetch('https://jsonplaceholder.typicode.com/posts');
console.log(result); */





/* 
Promise - new Promise (사용자 정의 promise)

Promise 함수에서 첫번째 파라미터는 성공했을 떄 실행될 함수가 오고, 
                두번쨰 파라미터는 실패했을 때 실행될 함수가 온다.
*/


// 1.
/* let job1 = new Promise(function(resolve, reject){});
console.log(job1); // Promise 객체 출력. */


// 2.
/* let job1 = new Promise(function(resolve, reject){});
job1.then(function(data) {
    console.log('data', data); // 아무것도 출력되지 않는다.
}) */


// 3.
/* let job1 = new Promise(function(resolve, reject){
    // job1에 입력될 결과물.
    resolve('resolved ok!');
});
job1.then(function(data){
    console.log('data', data);
}) */


// 4.
function job1() {
    return new Promise(function(resolve, reject){
            setTimeout(function() {
                resolve('job1 ok!');
            }, 2000);
        });
}

function job2() {
    return new Promise(function(resolve, reject){
            setTimeout(function() {
                reject('job2 fail!');
            }, 2000);
        });
}

// nested promise 방식
// job1()
//     .then(function(data){
//         console.log(data);
//         job2().then(function(data){
//             console.log(data);
//     })
// })

// promise chaining 방식
job1()
    .then(function(data) {
        console.log(data);
        return job2();
    })
    .then(function(data){
        console.log(data);
    })
    .catch(function(reason){
        console.log(reason);
    })
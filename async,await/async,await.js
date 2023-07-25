/* 
1. Async & Await
Async, Await 키워드를 통해 비동기 로직을 컨트롤 할 수 있다

콜백함수, promise로 인한 코드의 복잡함을 극복하기 위해 async & await가 나왔다.


2. 사용법(밑에 async & await 코드 참고)
function 앞에 async를 붙이면 해당 함수는 항상 프로미스를 반환한다.

await을 사용하지 않으면 async 함수 내부는 동기적으로 작동

await을 사용하면 await가 사용된 줄부터 비동기적으로 작동(async가 사용된 함수 내부에 한함).

async가 사용된 함수 내부의 promise 반환 함수 앞에 await를 사용하지 않으면 promise를 반환받는다(결과값을 기다리지 않고 다음 작업을 수행한다). 
async가 사용된 함수 내부의 promise 반환 함수 앞에 await를 사용하면 결과값을 반환받는다(결과값이 나올때 까지 기다리고 다음 작업을 수행한다).


3. 아래 코드 설명
- 비동기 로직 코드를 실행하면 
  1, 4, 확인 순서로 출력

- async & await 코드를 실행하면
  - async & await를 사용한 경우
    1, 2, Promise - (객체), 3, 4 출력.

  - async & await를 사용하지 않은 경우
    1, 2, 4, Promise is awesome - (문자열), 3 출력.
    * await가 사용된 줄부터 비동기적으로 작동하기 때문(async가 사용된 함수 내부에 한함).

4. 질문

*/


console.log(1);

// 비동기 로직
/* fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function(response) {
        console.log("확인");
    })
*/

// async & await
async function promiseFunc() {
    console.log(2) 
    const x = await new Promise((resolve, reject) => {
        resolve('Promise is awesome')
    })
    console.log(x);
    console.log(3);
}
promiseFunc()


console.log(4);



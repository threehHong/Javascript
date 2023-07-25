/* 
Async & Await
콜백함수, promise로 인한 코드의 복잡함을 극복하기 위해 async & await가 나왔다.
async와 await는 promise를 동기적으로 실행되는 것 처럼 보이게 하는 문법.

async는 function 앞에 위치. 
function 앞에 async를 붙이면 해당 함수는 항상 프라미스를 반환.
*/
async function f() {
    return 1; // return값은 이행 상태의 프라미스
}

f().then(alert);

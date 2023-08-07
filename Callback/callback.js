/* 
1. Callback 함수의 정의와 용도
정의
함수의 인자로 들어가는 함수.

용도
간단한 내용을 비동기 처리하기 위해 사용하기 적합.

단점
콜백을 반복해서 사용할 경우 가독성이 떨어지고 오류가 발생했을 때 수정하기 어렵다.
* callback 함수의 단점으로 인해 promise, async, await 개념이 나왔다.

// ex1
document.querySelector('.button').addEventListener('click', function(){
})

// ex2
setTimeout(function(){
}, 1000)
*/

/* 
// ex3
function first(parameter) {
    console.log('1. first 함수 실행');
    parameter();
}

function second() {
    console.log('2. second 함수 실행');
    console.log('Hello');
}

first(second)
*/



/* 
2. Callback Hell 
*/
// 함수 정의
function increaseAndPrint(n, callback) {
    setTimeout(() => {
        const increased = n + 1;

        console.log(increased);

        if (callback) {
            callback(increased);
        }
    }, 1000);
}


// 함수 호출
// 파라미터 부분 0이랑 n => {} 형태.
/* increaseAndPrint(0, (n) => {
    increaseAndPrint(n, (n) => {
       console.log('끝');
    });
}); */

increaseAndPrint(0, (n) => {
    increaseAndPrint(n, (n) => {
        increaseAndPrint(n, (n) => {
            increaseAndPrint(n, (n) => {
                increaseAndPrint(n, (n) => {
                    console.log('끝!');
                });
            });
        });
    });
});

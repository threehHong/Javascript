/* 
1. Callback 함수의 정의와 용도
정의
함수의 인자로 들어가는 함수.

용도
순차적으로 실행시키기 위해 사용.

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
2. Callback 함수의 한계와 극복
콜백함수로 인한 코드의 복잡함을 극복하기 위해 promise가 나왔다 -> promise로 인한 코드의 복잡함을 극복하기 위해 async & await가 나왔다.


3. Callback Hell 
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

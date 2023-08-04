/* 
closure
지역 변수로 선언된 변수들이 특정 형태에 의해 외부로 연결되는 것.

* closure 폐쇄
*/

if(true) {
    let f = function() {
        // 함수 안에서 선언된 변수는 함수 안에서만 사용할 수 있다.
        let number = 777;
        let luckyNumber = function() {
            return number;
        }
            return luckyNumber;
    }

    let f2 = f(); 

    console.log(f2()); // 777

    console.log(number); // number is not defined
}


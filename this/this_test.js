// test1
// 1. 두 개의 this.name의 출력 결과 답하기
// 2. 두 개의 this의 결과값을 같게 만들기
const testCar = {
    name: 'benz',
    getName: function(){
        console.log("getname", this.name); 
        const innerFunc = function() {
            console.log("innerFunc", this.name); 
        } 

        innerFunc();
    }
};
testCar.getName();

// 정답
// 1. getname benz, innerFunc
// 2. innerFunc = function() { 에서 () => {}로 고치기
/* const testCar = {
    name: 'benz',
    getName: function(){
        console.log("getname", this.name); // getname benz
        // const innerFunc = function() {
        //     console.log("innerFunc", this.name); // innerFunc, 함수 안에서 정의되었으므로 아무것도 가리키지 않는다(this 호출하는 메소드를 포함하는 객체를 가리킨다.)
        // }

        // 화살표 함수를 통한 바인딩 방법(일반함수와 화살표함수에서의 this가 다르다) 
        // * 화살표 함수는 bind 함수를 사용할 수 없다.
        const innerFunc = () => {
            console.log("innerFunc", this.name); // innerFunc benz 화살표 함수를 사용할 경우 상위 스코프로 바인딩을 해준다. or 화살표 함수에서의 this는 함수가 속해있는 곳의 상위 this를 상속 받는다.
        } 

        innerFunc();
    }
};
testCar.getName(); */




// test2
// 10, 20, 30에 this를 사용해서 10살, 20살, 30살이 출력되게 만드세요
const ageTest = {
    unit: '살',
    ageList:[10, 20, 30],
    getAgeList: function() {
        const result = this.ageList.map(function(age) {
            return age;
        });

        console.log(result); // 10, 20, 30
    }
}
ageTest.getAgeList();

// 정답
/* const ageTest = {
    unit: '살',
    ageList:[10, 20, 30],
    getAgeList: function() {
        const result = this.ageList.map((age) => {
            return age + this.unit;
        });

        console.log(result); // 10, 20, 30
    }
}
ageTest.getAgeList(); */

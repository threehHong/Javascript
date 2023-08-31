/* 
1. 함수 내부에 있는 for, while문에서 return을 사용할 수 있다.

2. return을 통해 함수 실행을 종료하고 함수를 빠져 나온다

3. break
switch나 for, while문 등을 종료하고 루프에서 빠져나온다.
*/

// 함수 내부의 switch에서 사용된 return은 해당 case에서 함수를 종료하고 값을 반환한다.
function employeeList(employee) {
  switch (employee) {
    case "james":
      return "james는 차장입니다";

    case "aiden":
      return "aiden은 부장입니다";

    case "tom":
      return "tom은 대리입니다";

    default:
      return "없는 직원입니다.";
  }
}

let employeeName = employeeList("james");

console.log(employeeName);

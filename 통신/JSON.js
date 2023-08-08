/* 
JSON의 정의(Javascript Object Notation)
- JS 객체에서 key 값이 따옴표로 감싸진 형태의 데이터.
- 클라이언트와 서버간의 자료를 주고 받는데 사용되는 데이터 형식.
- 서버와 클라이언트 간의 데이터 교환 방식으로 XML과 JSON이 있다
  최근에는 JSON 형식을 많이 사용한다 - 사람이 알아볼 수 있고 + 크기가 작고 + 사용하기 편하기 때문에.


JSON의 특징
- 텍스트로 구성되어 서버와 클라이언트 사이의 전송 속도가 빠르다
- 호환성이 좋다(C++, Java, Python 등의 언어에서 사용할 수 있다).
- JS 객체형태의 표기법을 사용하므로 읽기 쉽고 필요에 따라 JS 객체로 변환하기 쉽다.


JSON 예시
{
    "name": "Tom",
    "major": "Computer Science",
    "Grade": 1
}
https://jsonplaceholder.typicode.com/ 참고


JSON 문자열 
- '{"name":"Tom","major":"Computer Science","Grade":1}'
- 데이터 전송시 JSON 데이터에 공백을 제거하고 따옴표로 감싸 문자열화 시켜 전달한다.


JSON 주의사항
- 키값의 이름에 두 개 이상의 단어가 있을 경우 언더바로 이어준다.
- 키와 값으로 숫자, 문자열(문자열 값은 따옴표로 감싸준다), boolean, null, 배열만 - 사용할 수 있다(함수는 사용할 수 없다).
- JSON 문자열 안에 또 다른 JSON 문자열을 지정할 수 있다.
*/



/* 
1. 직렬화 (객체 -> 문자열) - JSON.stringify(); (객체 데이터에서 문자열화된 JSON 데이터로 변환하는 것).
직렬화 = 객체 데이터를 JSON으로 변환(객체의 키값을 쌍따옴표로 감싸는것) + 공백 제거 + JSON 데이터를 따옴표로 감싸는 것.

let student = {
    name: "Tom",
    major: "Computer Science",
    Grade: 1
}
let studentJsonType = JSON.stringify(student);
studentJsonType // '{"name":"Tom","major":"Computer Science","Grade":1}'
console.log(studentJsonType); // {"name":"Tom","major":"Computer Science","Grade":1}


2-1. 역직렬화 (문자열 -> 객체) - JSON.parse(); (문자열화된 JSON 데이터를 객체 데이터로 변환하는 것).
역직렬화 = JSON 데이터를 감싸는 따옴표 제거 + 키값의 쌍따옴표를 제거.

let studentJsonType = '{"name":"Tom","major":"Computer Science","Grade":1}'
let studentObjectType = JSON.parse(studentJsonType);
console.log(studentObjectType); // {name: 'Tom', major: 'Computer Science', Grade: 1}
 

2-2. .json() - (문자열화된 JSON 데이터를 객체 데이터로 변환하는 함수)
fetch(`JSON/student2.json`)
    // response.json() -> json 데이터를 자바스크립트 객체로 파싱.
    .then(response => response.json())
    .then(lists => {
      let output = "";
      lists.map(student => {
        output +=`
          <h2> ${student.name} </h2>
          <ul>
            <li> 전공 : ${student.major} </li>
            <li> 학년 : ${student.grade} </li>
          </ul>`
      })

      let result = document.querySelector('#result');
      result.innerHTML = output;
    }
    );

3. Parsing
JSON 데이터를 객체 데이터로 변환 시키는 것.
*/
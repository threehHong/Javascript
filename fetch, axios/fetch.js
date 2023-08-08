/* 
1. fetch API 정의
서버에 자료를 요청하거나 자료를 받아올 때 사용하는 API
promise를 반환한다.

2. fetch(위치, 옵션)
위치: 자료가 있는 URL이나 파일 이름
옵션: method, headers, body 등 지정

ex.
fetch('http://localhost:4000/api/todo', {
      // 아무것도 적지 않으면 GET 요청(또는 method를 적지 않으면).
      method: 'POST',

      // body에 담아서 보내는 데이터 타입이 application/json 형태라고 알려주는 것.
      // 전달되는 데이터는 JSON+공백 제거 형태의 데이터(클라이언트와 서버가 주고 받는 데이터는 문자열 이어야한다).
      headers: {
        'Content-Type': 'application/json'
      },
      // 데이터를 보내줄 때는 body에 담아서 보내준다
      // JSON.stringify() 객체 데이터를 JSON+공백 제거 형태로 만들어 주는 코드
      body: JSON.stringify({
        text,
        done,
      })
    }).then(() => {fetchData()})
*/

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
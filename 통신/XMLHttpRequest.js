/* 
1. XMLHttpRequest
- 클라이언트가 서버에 데이터를 요청하고 결과를 받을 때 사용하는 객체
- XMLHttpRequest 객체의 프라퍼티와 메서드를 사용해 자료를 주고받고, 상태를 체크한다.
- XML 자료를 HTTP 프로토콜을 사용해서 Request한다 라는 의미
- ES6이전 문법(ES6이후에는 fetch() 내장 함수나, axios() 라이브러리를 활용한다)



2. 사용방법
new를 사용해 XMLHttpRequest 객체의 인스턴스를 만든다.
let xhr = new XMLHttpRequest() // xhr이라는 변수명을 주요 사용한다.



3. XMLHttpRequest에 사용되는 method
- open(방식, 자료 위치, 비동기 여부) 
  방식: GET, POST
  자료 위치 : 요청할 서버의 URL
  비동기 여부: true-비동기, false-동기(값을 지정하지 않으면 기본적으로 비동기 처리).

- send(데이터)
  사용자 요청을 서버로 보내는 메소드.
  send() 괄호 안에 들어가는 매개변수는 선택이다.
  GET 방식을 사용할 경우 null로 넘기거나 빈 상태로 남겨 둔다.
  POST 방식을 사용할 경우 서버로 넘길 내용을 매개변수로 넘겨준다.

- ex.
  xhr.open("GET". "test.txt", true);
  xhr.send();



4. XMLHttpRequest에 사용되는 property
- readyState
  XMLHttpRequest로 서버에 요청했을때 현재 처리 상태를 나타낸다.
  0: 아직 아무 요청도 하지 않은 상태
  1: 서버로 자료를 요청하고 성공한 상태
  2: 서버 요청에 대한 응답으로 헤더가 도착한 상태
  3: 서버에서 자료들이 로딩 중인 상태
  4: 자료 처리가 끝나서 프로그램에서 사용할 수 있는 상태

- readystatechange
  readyState의 값이 바뀔 때마다 readystatechange 이벤트가 발생한다
  
  xhr.readystatechange = function() { // readyState의 값이 바뀌면 함수를 실행
    if(xhr.readyState === 4 && xhr.status === 200) {
      // 자료가 있고 가져오는데 성공 했다면 실행할 내용
      // 클라이언트에서 서버로 요청에 성공하고 요청한 결과를 서버가 클라이언트로 성공적으로 전송했다면 실행할 내용
      // 이와 같은 로직없이 xhr.responseText를 사용할 경우 오류가 생길 수 있다 서버에서 응답을 받아오는데 시간이 필요하므로.
    }
  }

- status
  HTTP 상태 코드를 나타낸다
  ex. 200, 404

- statusText 
  상태에 대해 메시지로 알려준다
  ex. Accepted, Not, Found

- 200 OK 서버에서 클라이언트로 성공적으로 전송
  202 Accepted 서버에서 클라이언트 요청을 수락
  400 Bad Request 요청 실해
  401 Unauthorized 권한이 없어 거절되었습니다. 인증 가능합니다
  402 Forbidden 권한이 없어 거절되었습니다. 인증을 시도해도 계속 거절됩니다.
  404 Not Found 문서를 찾을 수 없습니다.
  408 Request Timeout 요청 시간이 초과되었습니다.
  500 Internal Server Eroor 서버 내부에 오류가 발생했습니다
  503 Service Unavailable 요청한 서비스를 이용할 수 없습니다.

- responseText
  서버에서 가져온 자료를 텍스트 형태로 보여주는 속성.

- responseURL 
  어디에서 온건지 파일의 경로를 알려주는 URL을 보여주는 속성
*/

let xhr = new XMLHttpRequest() // xhr이라는 변수명을 주요 사용한다.
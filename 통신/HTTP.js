/* 
1. 프로토콜
클라이언트와 서버 간에 자료를 주고 받기위해 사용하는 규칙.

2. HTTP
웹에서 사용하는 프로토콜.
http를 통해 클라이언트와 서버가 통신을 한다.

3. HTTPS
보안이 강환된 http(s는 security)
*/



/*
1. HTTP 요청과 응답
HTTP 요청 - 클라이언트 -> 서버
HTTP 응답 - 클라이언트 <- 서버

2. 통신 예시
브라우저에서 주소창에 https://www.google.com 입력 -> https://www.google.com 주소를 통해 해당 주소의 자료가 있는 서버로 연결 -> 주소에 따른 자료를 요청 -> 서버는 DB에서 요청한 자료를 가져온다 -> 서버는 요청한 자료를 클라이언트에 전달한다.
*/



/*
1. 통신 내용 확인
- 개발자 도구에서 Network창 클릭
- Name, Status, Type, Initiator, Size, Time, Waterfall의 상태가 표시된 파일들 중 하나 클릭
- Headers 탭에는 General, Response Headers, Request Headers등이 있다.
- General 탭에서는 Request URL, Request Method, Status Code, Remote Address, Referrer Policy등의 다양한 정보를 확인할 수 있다.
- 요청시 요청 헤더에 요청할 자료를 담아서 서버에 전송한다.
- 응답은 응답 헤더에 요청한 자료들을 담아서 클라이언트에 전송한다.
- 실제 서버에서 넘어온 데이터는 Response 탭에 있다.


2-1. Request Method(요청 방식) - (개발자 도구/Network/Header)
GET 방식
서버에 자료를 요청할 때, 사이트 주소 뒤에 자료를 붙여 보내는 방식

POST 방식
요청 내용을 주소에 표시하지 않고 request body에 담아서 보내는 방식(request body에 담긴 내용은 암호화 되어 있다).


2-2. Status Code(상태) - (개발자 도구/Network/Header)
클라이언트가 서버에 요청을 보냈을 때 그 요청의 결과가 어떻게 되었는지 숫자로 알려주는 것(숫자는 성공했는지 실패 했는지 등의 의미를 담고 있다).

1XX : Information response

2XX : Successful response
200 : 서버가 요청을 성공적으로 처리했다

3XX : Redirection message

4XX : Client error response(클라이언트의 request에 에러가 있음을 알려주는 status code)
404(Not Found) : 서버가 요청한 자료를 찾지 못했을 때 알려주는 status code

5XX : 서버 오류로 인해 request를 수행할 수 없음을 알려주는 status code.
*/
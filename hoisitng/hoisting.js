/* 
1. 자바스크립트 코드 실행 과정
첫번째 스캔 - 자바스크립트 코드 실행 -> JS 엔진이 선언된 변수들을 전부 읽어들여 메모리에 저장(초기값으로 undefined 할당).
두번째 스캔 - JS 엔진이 메모리에 저장된 변수들을 기반으로 처음부터 코드를 다시 읽으면서 코드 실행. 

* 자바스크립트 엔진(V8) - 자바스크립트 코드를 실행하는 프로그램.


2. hoisting 
프로그램 실행시 코드에 있는 변수들을 읽어들여 메모리에 등록(저장) 하는 것(선언된 변수에 undefined가 할당된 내용을 메모리에 등록).
(프로그램에 선언된 변수들을 프로그램의 최상단으로 끌어올리다는 의미로 생각하기 정확한 원리는 바로 위 내용 참고).

* hoist - 1. 승강 장치. 2. (밧줄이나 장비를 이용하여) 들어 올리다, 끌어올리다.


3. lexical scope 방식
자식 스코프에서 부모 스코프에만 접근하는것
상위에서 하위로 접근할 수 없다.
*/


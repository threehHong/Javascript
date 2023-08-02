// 'use strict'
// 1. this는 기본적으로 window를 가리킨다.
this; // Window {}, strict 모드일 경우 undefined

function isThis() {
    console.log(this); // Window {}, strict 모드일 경우 undefined
}
isThis();



// 2. this는 함수가 호출 될 떄 결정되고, 호출하는 메소드를 포함하는 객체를 가리킨다.
const phone = {
    name: 'apple',
    sayName: function() {
        // this - 객체를 가리킴
        console.log("Phone name is", this);
    }
}
// phone.sayName(); // Phone name is {name: 'apple', sayName: f}

const globalPhone = phone.sayName;
// 밖에서 정의된 함수이므로 this는 최상단 객체인 window를 가리킨다.
globalPhone(); // Phone name is Window{}



// 3. 
const phone2 = {
    name: 'samsung',
    sayName: phone.sayName
}
phone2.sayName(); // Phone name is {name: 'samsung', sayName: f}



// 4. 호출하는 대상이 button 태그이므로 this는 button 태그를 가리킨다.
const btn = document.getElementById('button');
// Phone name is <button id="button"> this는 누구? </button>
btn.addEventListener('click', phone.sayName);



// 5.bind -
//   this값을 고정 시켜주는데 사용하는 함수
//   bind 함수를 통해 원하는 객체를 지정해줄 수 있다.    
//   bind 함수의 괄호 안에 고정할 함수명을 넣는다.).
btn.addEventListener('click', phone.sayName.bind(phone));



// 6. 일반함수와 화살표함수에서의 this가 다르다
//    일반 함수에서는 bind 함수를 사용할 수 있다
//    화살표 함수에서는 bind 함수를 사용할 수 없다.
//    this를 쓰고 싶으면 일반함수를 사용해라

